import { Box, Group } from "@mantine/core"
import { Btn } from "@/components/ui/Btn"
import { Container } from "@/components/ui/Container"
import { Fern } from "@/components/ui/Fern"
import { DownloadIcon, KiwiIcon, SunIcon } from "@/components/ui/icons"
import { PROFILE } from "@/data/portfolio"
import type { Theme } from "@/hooks/useTheme"
import styles from "./Nav.module.css"

interface NavProps {
  theme: Theme
  onToggle: () => void
}

export function Nav({ theme, onToggle }: NavProps) {
  return (
    <Box component="nav" className={styles.nav}>
      <Container>
        <Group justify="space-between" align="center" className={styles.inner} wrap="nowrap">
          <a className={styles.brand} href="#top">
            <span className={styles.brandMark}>
              <Fern size={30} style={{ color: "var(--accent)" }} />
            </span>
            <span>
              <span className={styles.brandName}>Elijah Pavlov</span>
              <span className={styles.brandRole}>senior frontend engineer</span>
            </span>
          </a>

          <Group gap={26} align="center" wrap="nowrap">
            <a className={styles.nlink} href="#about">
              <span className={styles.hash}>#</span> about
            </a>
            <a className={styles.nlink} href="#work">
              <span className={styles.hash}>#</span> work
            </a>
            <a className={styles.nlink} href="#stack">
              <span className={styles.hash}>#</span> stack
            </a>
            <a className={styles.nlink} href="#contact">
              <span className={styles.hash}>#</span> contact
            </a>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={onToggle}
              aria-label="Toggle light / dark theme"
              title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            >
              <span className={styles.tgTrack}>
                <span
                  className={[styles.tgKnob, theme === "light" ? styles.tgKnobLight : null]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {theme === "dark" ? <KiwiIcon /> : <SunIcon />}
                </span>
              </span>
            </button>
            <Btn variant="ghost" href={PROFILE.resume} download>
              <DownloadIcon /> resume.pdf
            </Btn>
          </Group>
        </Group>
      </Container>
    </Box>
  )
}
