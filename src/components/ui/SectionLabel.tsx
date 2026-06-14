import type { ReactNode } from "react"
import styles from "./SectionLabel.module.css"

interface SectionLabelProps {
  /** Порядковый номер секции, напр. "01". */
  idx: string
  children: ReactNode
  /** Доп. контент справа от линии (напр. счётчик проектов). */
  right?: ReactNode
}

// Заголовок секции: «01 selected work ──────».
export function SectionLabel({ idx, children, right }: SectionLabelProps) {
  return (
    <div className={styles.label}>
      <span className={styles.idx}>{idx}</span> {children}
      <span className={styles.ln} />
      {right}
    </div>
  )
}
