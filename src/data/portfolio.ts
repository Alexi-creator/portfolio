// Landing content: profile, metrics, projects, stack.

export interface Profile {
  name: string
  role: string
  subrole: string
  location: string
  email: string
  linkedin: string
  linkedinUrl: string
  telegram: string
  telegramUrl: string
  resume: string
  summary: string
}

export interface Stat {
  value: string
  unit: string
  label: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectMeta {
  role: string
  year: string
  type: string
}

export interface Highlight {
  metric: string
  label: string
}

export interface ProjectImage {
  src: string
  caption: string
}

export interface Project {
  id: string
  name: string
  tagline: string
  meta: ProjectMeta
  live: ProjectLink[]
  description: string
  stack: string[]
  highlights: Highlight[]
  note?: string
  images: ProjectImage[]
}

export interface SkillGroup {
  group: string
  items: string[]
}

export const PROFILE: Profile = {
  name: "Elijah Pavlov",
  role: "Full-Stack & AI Engineer",
  subrole: "Node.js / NestJS / React / Next.js / TypeScript / PostgreSQL / LLM & RAG",
  location: "Full-stack & applied AI — NestJS · Postgres · React · LLM / RAG",
  email: "pavlov.il.creator@gmail.com",
  linkedin: "linkedin.com/in/illpavlov",
  linkedinUrl: "https://linkedin.com/in/illpavlov",
  telegram: "@ilya_pavlov90",
  telegramUrl: "https://t.me/ilya_pavlov90",
  resume: "/Elijah_Pavlov_Resume.pdf",
  summary:
    "Full-stack engineer with 7+ years of commercial experience across React/Next.js and Node.js, now focused on backend systems and applied AI. At LimeBalance, I design API contracts and NestJS services alongside frontend architecture work, and designed, built and operate a production personal-finance platform: a NestJS + PostgreSQL API, a RAG assistant with tool calling (Claude API, pgvector, self-hosted embeddings), Redis caching, OCR receipt scanning and full observability. Measure-first: model and retrieval choices are backed by eval suites and benchmarks, not intuition.",
}

// Headline metrics pulled from real impact at LimeBalance
export const STATS: Stat[] = [
  { value: "7+", unit: "yrs", label: "shipping full-stack in production" },
  { value: "70", unit: "evals", label: "retrieval & answer cases gating AI releases" },
  { value: "75", unit: "%", label: "E2E test coverage, up from 15%" },
  { value: "−40", unit: "%", label: "initial bundle via Module Federation" },
]

export const PROJECTS: Project[] = [
  {
    id: "limebalance",
    name: "LimeBalance",
    tagline:
      "Personal-finance & trading-journal platform with a RAG assistant — plus a unified account, admin panel and shared core",
    meta: {
      role: "Full-Stack Engineer",
      year: "2022 — Present",
      type: "Platform · Full-Stack & AI",
    },
    live: [
      { label: "Dashboard", href: "https://app.limebalance.com/" },
      { label: "GitHub - backend", href: "https://github.com/Alexi-creator/limebalance" },
      { label: "GitHub - frontend", href: "https://github.com/Alexi-creator/limebalance-cab" },
    ],
    description:
      "A production personal-finance and trading-journal platform — API, Telegram bot, web cabinet, admin panel and mobile app — that I designed, built and operate end to end, alongside a unified account platform, admin panel and shared core. One NestJS + Fastify API on Bun with PostgreSQL / Prisma serves all five apps; a RAG assistant with agentic tool calling (Claude API, self-hosted bge-m3 embeddings, pgvector) answers questions about users' finances in plain language, with eval suites as release gates, per-plan quotas and per-question cost tracking.",
    stack: [
      "Node.js",
      "Bun",
      "NestJS",
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "pgvector",
      "Redis",
      "Claude API",
      "RAG",
      "bge-m3",
      "Tesseract OCR",
      "Zod",
      "OpenAPI",
      "JWT / OAuth",
      "React",
      "React Native (Expo)",
      "TanStack Query",
      "Zustand",
      "Mantine",
      "i18next",
      "Module Federation",
      "Docker",
      "GitHub Actions",
      "Sentry",
      "Grafana / Loki",
      "Prometheus",
      "Playwright",
      "Bun test",
    ],
    highlights: [
      {
        metric: "RAG + tools",
        label:
          "AI assistant on Claude API, bge-m3 & pgvector — 5 data tools reuse the app's own services, so answers always match the UI",
      },
      {
        metric: "70 evals",
        label:
          "37 retrieval (hit@k) + 33 answer cases act as release gates — prompt & model regressions caught before users",
      },
      {
        metric: "18 modules",
        label:
          "NestJS + Fastify API on Bun serving 5 apps — subscriptions, Bybit import, JWT / Google / Telegram login",
      },
      {
        metric: "0 drift",
        label:
          "every request & response defined once in shared Zod schemas — validation, OpenAPI docs and 3 clients",
      },
      {
        metric: "15 → 75%",
        label: "E2E coverage with a Playwright test strategy — production bugs cut in half",
      },
      {
        metric: "−40%",
        label: "initial bundle by moving auth into a Module Federation microfrontend",
      },
      {
        metric: "4+ projects",
        label: "adopted the shared platform core — new project setup 30% faster",
      },
      {
        metric: "−25%",
        label: "deployment time via Docker pipelines & shared lint standards",
      },
    ],
    images: [
      {
        src: "/images/overview.webp",
        caption:
          "Overview — balance, income, spend & savings at a glance, with a cash-flow chart and live goal progress",
      },
      {
        src: "/images/categories.webp",
        caption:
          "Categories — every expense bucket ranked by spend, with transaction counts and all-time totals",
      },
      {
        src: "/images/transactions.webp",
        caption:
          "Transactions — searchable, filterable ledger with inline edit, CSV export and fast pagination over thousands of rows",
      },
      {
        src: "/images/analytics-1.webp",
        caption:
          "Analytics — income, expenses, saved and savings-rate KPIs with period-over-period trends and an income-vs-expenses chart",
      },
      {
        src: "/images/analytics-2.webp",
        caption:
          "Analytics — spend broken down by category with a clear comparison of where spending changed vs. the previous period",
      },
      {
        src: "/images/goals.webp",
        caption:
          "Goals — savings targets with progress, amount left and the monthly pace needed to hit each deadline",
      },
    ],
  },
  {
    id: "finanso",
    name: "Finanso",
    tagline: "Financial services platform — account portal, marketing site & real-time data",
    meta: { role: "Frontend Developer", year: "2019 — 2022", type: "Platform · Real-time" },
    live: [{ label: "Site", href: "https://finanso.com/" }],
    description:
      "A financial services platform combining a personal account portal, a multi-page marketing site and real-time data services. I owned the entire frontend — from the component library and build tooling to project structure, the API integration layer and the release process — rewrote the legacy codebase onto a modern stack, and built a real-time WebSocket service for government debt-record data.",
    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "GatsbyJs",
      "SCSS",
      "WebSocket",
      "Webpack",
      "Gulp",
      "Pug",
      "UI Kit",
    ],
    highlights: [
      {
        metric: "10K+",
        label: "daily active users on the real-time WebSocket debt-record service",
      },
      {
        metric: "−40%",
        label: "build time after rewriting the legacy Pug / Gulp / Webpack codebase",
      },
      {
        metric: "3 teams",
        label: "adopted the company-wide UI kit",
      },
      {
        metric: "Real-time",
        label: "protocol & event schema co-designed with the backend team",
      },
    ],
    images: [
      { src: "/images/finanso-1.webp", caption: "Start" },
      { src: "/images/finanso-2.webp", caption: "Search" },
      { src: "/images/finanso-3.webp", caption: "Loan calculator" },
    ],
  },
]

export const SKILLS: SkillGroup[] = [
  {
    group: "Backend",
    items: [
      "Node.js",
      "Bun",
      "NestJS",
      "Fastify",
      "REST API design",
      "Zod schema contracts",
      "OpenAPI / Swagger",
      "JWT / OAuth",
      "Rate limiting",
      "Cron jobs",
      "WebSocket",
      "GraphQL",
    ],
  },
  {
    group: "AI / LLM",
    items: [
      "RAG",
      "Tool calling / agents",
      "Claude API",
      "Ollama",
      "Embeddings (bge-m3)",
      "Prompt design",
      "Eval suites (hit@k)",
      "LLM cost & token tracking",
      "OCR (Tesseract)",
    ],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "pgvector", "Prisma", "Redis", "Distributed locks", "Lua"],
  },
  {
    group: "Infrastructure & Observability",
    items: [
      "Docker",
      "GitHub Actions",
      "GitLab CI",
      "Linux VPS",
      "GHCR",
      "Sentry",
      "Grafana",
      "Loki",
      "Prometheus",
      "Grafana Alloy",
    ],
  },
  {
    group: "Architecture & Tooling",
    items: [
      "Monorepos (Bun workspaces)",
      "Shared typed packages",
      "Microfrontends",
      "Module Federation",
      "TypeScript",
      "Biome",
      "ESLint",
    ],
  },
  {
    group: "Testing",
    items: ["Bun test", "Jest", "Playwright (E2E)", "Property-style checks"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native (Expo)",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "i18next",
    ],
  },
  {
    group: "UI / Styling",
    items: ["Mantine", "Tailwind CSS", "CSS Modules", "SCSS", "Styled Components", "Storybook"],
  },
]
