import { Box, Divider } from "@mantine/core"
import clsx from "clsx"
import type { CSSProperties, ReactNode } from "react"
import styles from "./index.module.css"

interface SectionProps {
  id?: string
  divider?: boolean
  className?: string
  style?: CSSProperties
  children: ReactNode
}

// Base landing section: vertical padding + optional divider.
export function Section({ id, divider = false, className, style, children }: SectionProps) {
  return (
    <Box component="section" id={id} className={clsx(styles.section, className)} style={style}>
      {divider && <Divider mb="var(--section-pad)" />}
      {children}
    </Box>
  )
}
