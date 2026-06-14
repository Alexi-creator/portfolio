"use client"

import { useCallback, useEffect } from "react"
import type { Project } from "@/data/portfolio"
import styles from "./Lightbox.module.css"

interface LightboxProps {
  project: Project
  index: number
  onClose: () => void
  onNav: (delta: number) => void
}

export function Lightbox({ project, index, onClose, onNav }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNav(1)
      if (e.key === "ArrowLeft") onNav(-1)
    },
    [onClose, onNav],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [handleKey])

  const img = project.images[index]
  return (
    <div
      className={styles.lb}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} gallery`}
    >
      {/* фон: клик вне контента закрывает лайтбокс */}
      <button
        type="button"
        className={styles.backdrop}
        onClick={onClose}
        aria-label="Close gallery"
      />

      <div className={`${styles.top} mono`}>
        <span>
          <span className="accent">{project.name}</span> / {String(index + 1).padStart(2, "0")} of{" "}
          {String(project.images.length).padStart(2, "0")}
        </span>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          esc ✕
        </button>
      </div>
      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={() => onNav(-1)}
        aria-label="Previous"
      >
        ‹
      </button>
      <div className={styles.stage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt={img.caption} />
        <div className={`${styles.cap} mono`}>{img.caption}</div>
      </div>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={() => onNav(1)}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}
