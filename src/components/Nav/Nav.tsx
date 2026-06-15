"use client"

import { Box, Button, Group, useComputedColorScheme, useMantineColorScheme } from "@mantine/core"
import { Container } from "@/components/ui/Container"
import { Fern } from "@/components/ui/Fern"
import { DownloadIcon, KiwiIcon, SunIcon } from "@/components/ui/icons"
import { PROFILE } from "@/data/portfolio"
import styles from "./Nav.module.css"

export function Nav() {
  // keepTransitions: otherwise Mantine injects a style on scheme change that kills
  // ALL transitions (`* { transition: none !important }`), so the knob animation
  // never runs. With this flag the theme switches smoothly.
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true })
  // We only read the value inside the click handler (on the client); the markup
  // never branches on the scheme — knob position and icons are driven by CSS off
  // the Mantine attribute, so there's no hydration mismatch and no setState in an effect.
  const computed = useComputedColorScheme("dark")
  const toggleColorScheme = () => setColorScheme(computed === "dark" ? "light" : "dark")

  return (
    <Box component="header" className={styles.nav}>
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
            <Box component="nav" aria-label="Primary" className={styles.links}>
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
              </Group>
            </Box>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleColorScheme}
              aria-label="Toggle light / dark theme"
              title="Toggle light / dark theme"
            >
              <span className={styles.tgTrack}>
                <span className={styles.tgKnob}>
                  <Box component="span" className={styles.tgIcon} lightHidden>
                    <KiwiIcon />
                  </Box>
                  <Box component="span" className={styles.tgIcon} darkHidden>
                    <SunIcon />
                  </Box>
                </span>
              </span>
            </button>
            <Button
              component="a"
              href={PROFILE.resume}
              download
              variant="default"
              size="sm"
              leftSection={<DownloadIcon />}
            >
              resume.pdf
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  )
}
