import "@mantine/core/styles.css"
import "./globals.css"

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { theme } from "@/theme"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Elijah Pavlov — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 7+ years in React, Next.js and TypeScript — architecting scalable frontends and expanding into full-stack with Node.js / NestJS.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      {...mantineHtmlProps}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
