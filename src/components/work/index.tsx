"use client"

import { Text } from "@mantine/core"
import clsx from "clsx"
import { useState } from "react"
import { PROJECTS, type Project } from "@/data/portfolio"
import { Container } from "@/ui/Container"
import { Section } from "@/ui/Section"
import { SectionLabel } from "@/ui/SectionLabel"
import styles from "./index.module.css"
import { Lightbox } from "./Lightbox"
import { ProjectCard } from "./ProjectCard"

interface LightboxState {
  project: Project
  index: number
}

export function Work() {
  const [active, setActive] = useState(0)
  const [lb, setLb] = useState<LightboxState | null>(null)
  const n = PROJECTS.length
  const go = (d: number) => setActive((a) => (a + d + n) % n)
  const p = PROJECTS[active]

  const openLb = (project: Project, index: number) => setLb({ project, index })
  const navLb = (d: number) =>
    setLb((cur) => {
      if (!cur) return cur
      const len = cur.project.images.length
      return { ...cur, index: (cur.index + d + len) % len }
    })

  return (
    <>
      <Section id="work" divider>
        <Container>
          <SectionLabel
            idx="01"
            right={
              <Text ff="monospace" fz="12.5px" c="dimmed" style={{ whiteSpace: "nowrap" }}>
                {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </Text>
            }
          >
            selected work
          </SectionLabel>

          {/* project switcher */}
          <div className={styles.switcher}>
            <div className={styles.tabs} role="tablist">
              {PROJECTS.map((pr, i) => (
                <button
                  type="button"
                  key={pr.id}
                  role="tab"
                  aria-selected={i === active}
                  className={clsx(styles.tab, i === active && styles.tabOn)}
                  onClick={() => setActive(i)}
                >
                  <span className={clsx(styles.tabIdx, "mono")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.tabName}>{pr.name}</span>
                  <span className={clsx(styles.tabYear, "mono")}>{pr.meta.year}</span>
                </button>
              ))}
            </div>
            <div className={styles.arrows}>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => go(-1)}
                aria-label="Previous project"
              >
                ‹
              </button>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => go(1)}
                aria-label="Next project"
              >
                ›
              </button>
            </div>
          </div>

          {/* active project */}
          <div className={styles.swap} key={p.id}>
            <ProjectCard p={p} onOpen={openLb} />
          </div>
        </Container>
      </Section>
      {lb && (
        <Lightbox project={lb.project} index={lb.index} onClose={() => setLb(null)} onNav={navLb} />
      )}
    </>
  )
}
