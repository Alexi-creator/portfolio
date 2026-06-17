import "@mantine/core/styles.css"
import "./globals.css"

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core"
import { GoogleAnalytics } from "@next/third-parties/google"
import clsx from "clsx"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { theme } from "@/theme"

// Load GA only in production and only when the measurement ID is configured,
// so local development doesn't pollute analytics with fake page views.
const gaId = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_GA_ID : undefined

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
    <html lang="en" {...mantineHtmlProps} className={clsx(geistSans.variable, geistMono.variable)}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
