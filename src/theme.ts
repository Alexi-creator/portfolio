import { createTheme } from "@mantine/core"

// Landing theme. Tokens already match Mantine's palette, so here we only set the
// accent, fonts, radii, heading sizes and base component defaults — everything
// else comes from Mantine's color scheme (dark/light).
export const theme = createTheme({
  primaryColor: "teal",
  // teal.4 (#38d9a9) is the accent; light theme uses a darker shade for contrast
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
    Button: {
      defaultProps: { radius: "sm" },
      styles: {
        root: { fontFamily: "var(--font-mono)", fontWeight: 500 },
      },
    },
    Badge: {
      defaultProps: { radius: "sm", variant: "default", size: "lg" },
      styles: {
        root: { fontFamily: "var(--font-mono)", fontWeight: 400 },
        label: { textTransform: "none" },
      },
    },
    Paper: {
      defaultProps: { radius: "md", withBorder: true },
    },
  },
})
