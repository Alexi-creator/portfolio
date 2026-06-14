import { Box, Group, SimpleGrid, Stack } from "@mantine/core"
import { Btn } from "@/components/ui/Btn"
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
            <h2>
              Let&apos;s build something
              <br />
              resilient together<span className="accent">.</span>
            </h2>
            <p style={{ marginTop: 16, maxWidth: 440 }}>
              Senior frontend by trade — now going full-stack with NestJS, Node.js and Postgres on
              production work. The fastest way to reach me is email; résumé attached for the
              details.
            </p>
            <Group gap={12} mt={26}>
              <Btn variant="primary" size="lg" href={`mailto:${PROFILE.email}`}>
                <MailIcon /> {PROFILE.email}
              </Btn>
              <Btn variant="ghost" size="lg" href={PROFILE.resume} download>
                <DownloadIcon /> Download résumé
              </Btn>
            </Group>
          </div>

          <Stack gap={10}>
            <a className={styles.row} href={`mailto:${PROFILE.email}`}>
              <span className={`${styles.key} mono`}>email</span>
              <span className={styles.val}>
                {PROFILE.email} <ArrowIcon />
              </span>
            </a>
            <a className={styles.row} href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer">
              <span className={`${styles.key} mono`}>linkedin</span>
              <span className={styles.val}>
                {PROFILE.linkedin} <ArrowIcon />
              </span>
            </a>
            <a className={styles.row} href={PROFILE.resume} download>
              <span className={`${styles.key} mono`}>resume</span>
              <span className={styles.val}>
                Elijah_Pavlov_Resume.pdf <DownloadIcon />
              </span>
            </a>
          </Stack>
        </SimpleGrid>

        <Box component="footer" className={styles.footer}>
          <Group justify="space-between" gap={16} wrap="wrap">
            <Group gap={8} className={`${styles.footerItem} mono`}>
              <Fern size={24} style={{ color: "var(--accent)" }} />
              <span>
                <span className="accent">$</span> echo &quot;© 2026 {PROFILE.name}&quot;
              </span>
            </Group>
            <Group gap={7} className={`${styles.footerItem} mono`}>
              <span className="dot" style={{ display: "inline-block" }} /> frontend architecture →
              full-stack · made in Aotearoa
            </Group>
          </Group>
        </Box>
      </Container>
    </Section>
  )
}
