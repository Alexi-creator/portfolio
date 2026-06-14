"use client"

import { useEffect, useState } from "react"

export type Theme = "dark" | "light"

const STORAGE_KEY = "theme"

/**
 * Управляет светлой/тёмной темой через атрибут `data-theme` на <html>
 * (на нём завязаны CSS-токены дизайна). Дефолт — dark, выбор сохраняется
 * в localStorage. Чтобы не было рассинхрона при гидрации, стартовое
 * состояние всегда "dark" (как в SSR), а реальное значение подтягивается
 * в эффекте после монтирования.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === "light" || stored === "dark") setTheme(stored)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return { theme, toggle }
}
