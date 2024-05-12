import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "providers/providers";
import { Header } from "components/layout/Header";
import { Footer } from "components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elijah Pavlov",
  description: "Portfolio of Elijah Pavlov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers> 
      </body>
    </html>
  );
}
