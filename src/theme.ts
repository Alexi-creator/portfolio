"use client"

import { createTheme } from "@mantine/core"

// Здесь будем централизованно настраивать тему лендинга:
// цвета, шрифты, радиусы и т.д. Пока — базовая заготовка.
export const theme = createTheme({
  fontFamily: "var(--font-geist-sans), sans-serif",
  fontFamilyMonospace: "var(--font-geist-mono), monospace",
  headings: {
    fontFamily: "var(--font-geist-sans), sans-serif",
  },
})
