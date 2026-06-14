import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Btn.module.css"

interface BtnBase {
  variant?: "primary" | "ghost"
  size?: "md" | "lg"
  className?: string
  children: ReactNode
}

// Кнопка-ссылка дизайна. Если передан href — рендерится <a>, иначе <button>.
type BtnProps = BtnBase &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )

export function Btn({ variant = "ghost", size = "md", className, children, ...rest }: BtnProps) {
  const cls = [styles.btn, styles[variant], size === "lg" ? styles.lg : null, className]
    .filter(Boolean)
    .join(" ")

  if (rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
