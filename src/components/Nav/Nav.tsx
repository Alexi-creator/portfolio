"use client"

import { Box, Button, Group, useComputedColorScheme, useMantineColorScheme } from "@mantine/core"
import { Container } from "@/components/ui/Container"
import { Fern } from "@/components/ui/Fern"
import { DownloadIcon, KiwiIcon, SunIcon } from "@/components/ui/icons"
import { PROFILE } from "@/data/portfolio"
import styles from "./Nav.module.css"

export function Nav() {
  // keepTransitions: иначе Mantine при смене схемы вставляет style, глушащий
  // ВСЕ transitions (`* { transition: none !important }`) — и анимация ползунка
  // не отрабатывает. С этим флагом тема плавно переключается.
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true })
  // Значение читаем только в обработчике клика (на клиенте) — в разметке схему
  // не ветвим: позиция ползунка и иконки управляются CSS от атрибута Mantine,
  // поэтому нет ни hydration mismatch, ни setState в эффекте.
  const computed = useComputedColorScheme("dark")
  const toggleColorScheme = () => setColorScheme(computed === "dark" ? "light" : "dark")

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
