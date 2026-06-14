import type { CSSProperties, ReactNode } from "react"
import styles from "./Tag.module.css"

interface TagProps {
  children: ReactNode
  /** Показывать ли цветной квадратик-маркер слева. */
  square?: boolean
  /** Цвет квадратика (по умолчанию — акцент). */
  squareColor?: string
  className?: string
  style?: CSSProperties
}

// Технологический бейдж (стек, метки).
export function Tag({ children, square = false, squareColor, className, style }: TagProps) {
  return (
    <span className={[styles.tag, className].filter(Boolean).join(" ")} style={style}>
      {square && (
        <span className={styles.sq} style={squareColor ? { background: squareColor } : undefined} />
      )}
      {children}
    </span>
  )
}
