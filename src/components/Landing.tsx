"use client"

import { useState } from "react"
import { Contact } from "@/components/Contact/Contact"
import { Hero } from "@/components/Hero/Hero"
import { Nav } from "@/components/Nav/Nav"
import { Skills } from "@/components/Skills/Skills"
import { Lightbox } from "@/components/Work/Lightbox"
import { Work } from "@/components/Work/Work"
import type { Project } from "@/data/portfolio"

interface LightboxState {
  project: Project
  index: number
}

export function Landing() {
  const [lb, setLb] = useState<LightboxState | null>(null)

  const openLb = (project: Project, index: number) => setLb({ project, index })
  const nav = (d: number) =>
    setLb((cur) => {
      if (!cur) return cur
      const n = cur.project.images.length
      return { ...cur, index: (cur.index + d + n) % n }
    })

  return (
    <>
      <Nav />
      <Hero />
      <Work onOpen={openLb} />
      <Skills />
      <Contact />
      {lb && (
        <Lightbox project={lb.project} index={lb.index} onClose={() => setLb(null)} onNav={nav} />
      )}
    </>
  )
}
