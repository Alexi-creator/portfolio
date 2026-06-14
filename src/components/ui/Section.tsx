import { Box } from "@mantine/core"
import type { CSSProperties, ReactNode } from "react"
import styles from "./Section.module.css"

interface SectionProps {
  id?: string
  /** Рисует тонкий разделитель сверху секции. */
  divider?: boolean
  className?: string
  style?: CSSProperties
  children: ReactNode
}

// Базовая секция лендинга: вертикальные отступы + опциональный разделитель.
export function Section({ id, divider = false, className, style, children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      className={[styles.section, className].filter(Boolean).join(" ")}
      style={style}
    >
      {divider && <hr className={styles.divider} />}
      {children}
    </Box>
  )
}
