import { Box, Button, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core"
import clsx from "clsx"
import { Container } from "@/components/ui/Container"
import { Fern } from "@/components/ui/Fern"
import { ArrowIcon, DownloadIcon, MailIcon } from "@/components/ui/icons"
import { Section } from "@/components/ui/Section"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { PROFILE } from "@/data/portfolio"
import styles from "./Contact.module.css"

export function Contact() {
  return (
    <Section id="contact" divider style={{ paddingBottom: 0 }}>
      <Container>
        <SectionLabel idx="03">get in touch</SectionLabel>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={56} style={{ alignItems: "start" }}>
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
            <Group gap={12} mt={26}>
              <Button
                component="a"
                href={`mailto:${PROFILE.email}`}
                variant="filled"
                size="md"
                leftSection={<MailIcon />}
              >
                {PROFILE.email}
              </Button>
              <Button
                component="a"
                href={PROFILE.resume}
                download
                variant="default"
                size="md"
                leftSection={<DownloadIcon />}
              >
                Download résumé
              </Button>
            </Group>
          </div>

          <Stack gap={10}>
            <a className={styles.row} href={`mailto:${PROFILE.email}`}>
              <span className={clsx(styles.key, "mono")}>email</span>
              <span className={styles.val}>
                {PROFILE.email} <ArrowIcon />
              </span>
            </a>
            <a className={styles.row} href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer">
              <span className={clsx(styles.key, "mono")}>linkedin</span>
              <span className={styles.val}>
                {PROFILE.linkedin} <ArrowIcon />
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
              <span className="dot" style={{ display: "inline-block" }} /> senior frontend →
              full-stack
            </Group>
          </Group>
        </Box>
      </Container>
    </Section>
  )
}
