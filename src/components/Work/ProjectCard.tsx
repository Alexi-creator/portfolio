import { Group } from "@mantine/core"
import { Btn } from "@/components/ui/Btn"
import { ArrowIcon, ExpandIcon } from "@/components/ui/icons"
import { Tag } from "@/components/ui/Tag"
import type { Project } from "@/data/portfolio"
import styles from "./ProjectCard.module.css"

export type OpenLightbox = (project: Project, index: number) => void

interface ProjectCardProps {
  p: Project
  onOpen: OpenLightbox
}

export function ProjectCard({ p, onOpen }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <div>
          <div className={`${styles.meta} mono`}>
            <span className="accent">{p.meta.type}</span>
            <span className={styles.sep}>/</span>
            <span>{p.meta.role}</span>
            <span className={styles.sep}>/</span>
            <span>{p.meta.year}</span>
          </div>
          <h2 style={{ marginTop: 12 }}>{p.name}</h2>
          <p className={styles.tagline}>{p.tagline}</p>
        </div>
        <div className={styles.live}>
          {p.live.length > 0 ? (
            p.live.map((l) => (
              <Btn variant="ghost" href={l.href} target="_blank" rel="noreferrer" key={l.label}>
                {l.label} <ArrowIcon />
              </Btn>
            ))
          ) : (
            <Tag square squareColor="var(--muted)" style={{ alignSelf: "flex-start" }}>
              private · employer product
            </Tag>
          )}
        </div>
      </div>

      <p className={styles.desc}>{p.description}</p>

      {/* stack */}
      <Group gap={8} mt={22}>
        {p.stack.map((t) => (
          <Tag square key={t}>
            {t}
          </Tag>
        ))}
      </Group>

      {/* highlights */}
      <div className={styles.hlGrid}>
        {p.highlights.map((h) => (
          <div className={styles.hl} key={h.label}>
            <div className={`${styles.hlMetric} mono`}>{h.metric}</div>
            <div className={styles.hlLabel}>{h.label}</div>
          </div>
        ))}
      </div>

      {/* gallery */}
      <div className={`${styles.galLabel} mono`}>
        {`// gallery — ${p.images.length} screens`}
        {p.note && (
          <span className={styles.galNote}> · placeholders, drop real screens to replace</span>
        )}
      </div>
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
    </article>
  )
}
