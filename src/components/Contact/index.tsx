import { Box, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core"
import clsx from "clsx"
import { PROFILE } from "@/data/portfolio"
import { ArrowIcon } from "@/icons/ArrowIcon"
import { DownloadIcon } from "@/icons/DownloadIcon"
import { Container } from "@/ui/Container"
import { Fern } from "@/ui/Fern"
import { Section } from "@/ui/Section"
import { SectionLabel } from "@/ui/SectionLabel"
import styles from "./index.module.css"

export function Contact() {
  return (
    <Section id="contact" divider style={{ paddingBottom: 0 }}>
      <Container>
        <SectionLabel idx="03">get in touch</SectionLabel>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={56} style={{ alignItems: "center" }}>
          <div>
            <Title order={2}>
              Let&apos;s build something
              <br />
              resilient together<span className="accent">.</span>
            </Title>
            <Text mt={16} maw={440}>
              Senior frontend by trade — now going full-stack with NestJS, Node.js and Postgres on
              production work. The fastest way to reach me is email; résumé attached for the
              details.
            </Text>
          </div>

          <Stack gap={10}>
            <a
              className={clsx(styles.row, styles.rowAccent)}
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className={clsx(styles.key, "mono")}>linkedin</span>
              <span className={styles.val}>
                {PROFILE.linkedin} <ArrowIcon />
              </span>
            </a>
            <a className={styles.row} href={PROFILE.telegramUrl} target="_blank" rel="noreferrer">
              <span className={clsx(styles.key, "mono")}>telegram</span>
              <span className={styles.val}>
                {PROFILE.telegram} <ArrowIcon />
              </span>
            </a>
            <a className={styles.row} href={`mailto:${PROFILE.email}`}>
              <span className={clsx(styles.key, "mono")}>email</span>
              <span className={styles.val}>
                {PROFILE.email} <ArrowIcon />
              </span>
            </a>
            <a className={styles.row} href={PROFILE.resume} download>
              <span className={clsx(styles.key, "mono")}>resume</span>
              <span className={styles.val}>
                Elijah_Pavlov_Resume.pdf <DownloadIcon />
              </span>
            </a>
          </Stack>
        </SimpleGrid>

        <Box component="footer" className={styles.footer}>
          <Group justify="space-between" gap={16} wrap="wrap">
            <Group gap={8} className={clsx(styles.footerItem, "mono")}>
              <Fern size={24} style={{ color: "var(--accent)" }} />
              <span>&quot;© 2026 {PROFILE.name}&quot;</span>
            </Group>
            <Group gap={7} className={clsx(styles.footerItem, "mono")}>
              <span className="dot" style={{ display: "inline-block" }} /> senior frontend engineer
              → full-stack
            </Group>
          </Group>
        </Box>
      </Container>
    </Section>
  )
}
