import { Badge, Box, Button, Flex, Group, Paper, Text, Title } from "@mantine/core"
import type { Project } from "@/data/portfolio"
import { ArrowIcon } from "@/icons/ArrowIcon"
import { ExpandIcon } from "@/icons/ExpandIcon"
import styles from "./index.module.css"

export type OpenLightbox = (project: Project, index: number) => void

interface ProjectCardProps {
  p: Project
  onOpen: OpenLightbox
}

function StackBadge({ children, color = "teal" }: { children: string; color?: string }) {
  return (
    <Badge leftSection={<Box w={7} h={7} bg={color} style={{ borderRadius: 1 }} />}>
      {children}
    </Badge>
  )
}

export function ProjectCard({ p, onOpen }: ProjectCardProps) {
  return (
    <Paper p="clamp(26px, 3.4vw, 42px)">
      <Flex
        justify="space-between"
        align="flex-start"
        gap={24}
        direction={{ base: "column", sm: "row" }}
      >
        <div>
          <Group gap={8} ff="monospace" fz="12.5px" c="var(--fg-2)">
            <Text span inherit c="teal">
              {p.meta.type}
            </Text>
            <Text span inherit c="dimmed">
              /
            </Text>
            <Text span inherit>
              {p.meta.role}
            </Text>
            <Text span inherit c="dimmed">
              /
            </Text>
            <Text span inherit>
              {p.meta.year}
            </Text>
          </Group>
          <Title order={2} mt={12}>
            {p.name}
          </Title>
          <Text fz={16} c="var(--fg-2)" mt={10} maw={620}>
            {p.tagline}
          </Text>
        </div>
        <Group gap={10} style={{ flexShrink: 0 }}>
          {p.live.length > 0 ? (
            p.live.map((l) => (
              <Button
                key={l.label}
                component="a"
                href={l.href}
                target="_blank"
                rel="noreferrer"
                variant="default"
                size="sm"
                rightSection={<ArrowIcon />}
              >
                {l.label}
              </Button>
            ))
          ) : (
            <StackBadge color="var(--muted)">private · employer product</StackBadge>
          )}
        </Group>
      </Flex>

      <Text mt={24} fz={15} c="var(--fg-2)" maw={760}>
        {p.description}
      </Text>

      {/* stack */}
      <Group gap={8} mt={22}>
        {p.stack.map((t) => (
          <StackBadge key={t}>{t}</StackBadge>
        ))}
      </Group>

      {/* highlights */}
      <div className={styles.hlGrid}>
        {p.highlights.map((h) => (
          <div className={styles.hl} key={h.label}>
            <Text ff="monospace" fz={24} fw={600} c="teal" style={{ letterSpacing: "-0.02em" }}>
              {h.metric}
            </Text>
            <Text fz="13.5px" c="var(--fg-2)" mt={8} lh={1.5}>
              {h.label}
            </Text>
          </div>
        ))}
      </div>

      {/* gallery */}
      <Text ff="monospace" fz="12.5px" c="dimmed" mt={32} mb={14}>
        {`// gallery — ${p.images.length} screens`}
        {p.note && (
          <Text span inherit c="var(--dim)">
            {" "}
            · placeholders, drop real screens to replace
          </Text>
        )}
      </Text>
      <div className={styles.gallery}>
        {p.images.map((img, i) => (
          <button
            type="button"
            className={styles.thumb}
            key={img.src}
            onClick={() => onOpen(p, i)}
            aria-label={`Open ${img.caption}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.caption} loading="lazy" />
            <span className={styles.expand}>
              <ExpandIcon />
            </span>
          </button>
        ))}
      </div>
    </Paper>
  )
}
