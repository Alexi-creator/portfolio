"use client"

import { useState } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { PROJECTS } from "@/data/portfolio"
import { type OpenLightbox, ProjectCard } from "./ProjectCard"
import styles from "./Work.module.css"

interface WorkProps {
  onOpen: OpenLightbox
}

export function Work({ onOpen }: WorkProps) {
  const [active, setActive] = useState(0)
  const n = PROJECTS.length
  const go = (d: number) => setActive((a) => (a + d + n) % n)
  const p = PROJECTS[active]

  return (
    <Section id="work" divider>
      <Container>
        <SectionLabel
          idx="01"
          right={
            <span className={`${styles.count} mono`}>
              {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
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
                className={[styles.tab, i === active ? styles.tabOn : null]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setActive(i)}
              >
                <span className={`${styles.tabIdx} mono`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.tabName}>{pr.name}</span>
                <span className={`${styles.tabYear} mono`}>{pr.meta.year}</span>
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
          <ProjectCard p={p} onOpen={onOpen} />
        </div>
      </Container>
    </Section>
  )
}
