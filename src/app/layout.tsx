import "@mantine/core/styles.css"
import "./globals.css"

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core"
import clsx from "clsx"
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
  // Site isn't ready yet — block search engine indexing.
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} className={clsx(geistSans.variable, geistMono.variable)}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
