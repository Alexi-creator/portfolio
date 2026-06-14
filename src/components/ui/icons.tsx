// Набор инлайновых SVG-иконок дизайна. Все декоративные (идут рядом с текстом),
// поэтому помечены aria-hidden, чтобы не дублироваться для скринридеров.

export function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  )
}

export function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function KiwiIcon() {
  return (
    <svg width="16" height="15.7" viewBox="0 0 200 196" fill="currentColor" aria-hidden="true">
      <path d="M83.0 0.0 L117.0 1.5 L151.1 14.8 L168.9 26.7 L186.7 44.4 L195.6 57.8 L200.0 69.6 L200.0 88.9 L182.2 112.6 L177.8 136.3 L168.9 160.0 L165.9 161.5 L171.9 134.8 L171.9 114.1 L158.5 106.7 L146.7 93.3 L142.2 93.3 L111.1 123.0 L114.1 146.7 L131.9 164.4 L146.7 173.3 L167.4 176.3 L168.9 180.7 L174.8 180.7 L177.8 183.7 L168.9 186.7 L155.6 185.2 L155.6 195.6 L145.2 192.6 L134.8 185.2 L130.4 185.2 L127.4 189.6 L124.4 188.1 L123.0 168.9 L108.1 152.6 L90.4 140.7 L83.0 131.9 L60.7 128.9 L43.0 118.5 L34.1 123.0 L20.7 137.8 L20.7 152.6 L23.7 161.5 L34.1 176.3 L23.7 170.4 L19.3 179.3 L8.9 163.0 L4.4 165.9 L3.0 173.3 L0.0 168.9 L3.0 145.2 L13.3 133.3 L28.1 103.7 L19.3 77.0 L19.3 59.3 L25.2 38.5 L34.1 25.2 L48.9 11.9 L63.7 4.4 L81.5 1.5 Z" />
    </svg>
  )
}
