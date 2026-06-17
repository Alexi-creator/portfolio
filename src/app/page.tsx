import { Contact } from "@/components/Contact"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Work } from "@/components/work"

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </>
  )
}
