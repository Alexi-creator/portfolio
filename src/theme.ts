import { createTheme } from "@mantine/core"

// Тема лендинга. Дизайн-токены совпадают с палитрой Mantine, поэтому здесь
// настраиваем только акцент, шрифты, радиусы, размеры заголовков и дефолты
// базовых компонентов — остальное берёт цветовая схема Mantine (dark/light).
export const theme = createTheme({
  primaryColor: "teal",
  // teal.4 (#38d9a9) — акцент дизайна; в светлой теме берём чуть темнее для контраста
  primaryShade: { light: 6, dark: 4 },

  fontFamily: "var(--font-geist-sans), sans-serif",
  fontFamilyMonospace: "var(--font-geist-mono), monospace",
  defaultRadius: "md",

  headings: {
    fontFamily: "var(--font-geist-sans), sans-serif",
    fontWeight: "600",
    sizes: {
      h1: { fontSize: "clamp(38px, 5.4vw, 66px)", lineHeight: "1.04" },
      h2: { fontSize: "clamp(26px, 3vw, 38px)", lineHeight: "1.12" },
      h3: { fontSize: "19px", lineHeight: "1.3" },
    },
  },

  components: {
    // Кнопки дизайна — моноширинный шрифт, средняя жирность.
    Button: {
      defaultProps: { radius: "sm" },
      styles: {
        root: { fontFamily: "var(--font-mono)", fontWeight: 500 },
      },
    },
    // Технологические бейджи — прямоугольные, без капса, моно.
    Badge: {
      defaultProps: { radius: "sm", variant: "default", size: "lg" },
      styles: {
        root: { fontFamily: "var(--font-mono)", fontWeight: 400 },
        label: { textTransform: "none" },
      },
    },
    // Карточки = поверхность + бордер дизайна.
    Paper: {
      defaultProps: { radius: "md", withBorder: true },
    },
  },
})
