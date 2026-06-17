// Landing content: profile, metrics, projects, stack.

export interface Profile {
  name: string
  role: string
  subrole: string
  location: string
  email: string
  linkedin: string
  linkedinUrl: string
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
  role: "Senior Frontend Engineer",
  subrole: "Full-Stack track · React / Next.js / Node.js / NestJS",
  location: "Expanding into full-stack — NestJS · Node.js · Postgres",
  email: "pavlov.il.creator@gmail.com",
  linkedin: "linkedin.com/in/illpavlov",
  linkedinUrl: "https://linkedin.com/in/illpavlov",
  resume: "/Elijah_Pavlov_Resume.pdf",
  summary:
    "Senior Frontend Engineer with 7+ years building scalable web applications in React, Next.js and TypeScript. I architect microfrontend systems, drive performance and testing strategy across teams, and define the engineering standards that keep delivery fast and stable. Currently expanding into full-stack with Node.js and NestJS.",
}

// Headline metrics pulled from real impact at Awin
export const STATS: Stat[] = [
  { value: "7+", unit: "yrs", label: "shipping production frontend" },
  { value: "−40", unit: "%", label: "bundle size via Module Federation" },
  { value: "75", unit: "%", label: "test coverage, up from 15%" },
  { value: "−35", unit: "%", label: "page load time, Lighthouse-verified" },
]

export const PROJECTS: Project[] = [
  {
    id: "limebalance",
    name: "Limebalance",
    tagline: "Personal finance dashboard — budgets, goals & crypto in one place",
    meta: { role: "Frontend Architecture & Build", year: "2026", type: "Product · SPA" },
    live: [
      // { label: "Landing", href: "../Limebalance.html" },
      { label: "Dashboard", href: "https://app.limebalance.com/" },
    ],
    description:
      "A token-driven finance product spanning a marketing site and a six-module dashboard. Built on a Mantine-aligned design system with full internationalization, a light/dark theme engine, and live SVG-rendered charts for cash-flow, analytics and portfolio allocation.",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "Zod",
      "TanStack Query",
      "Vite",
      "Biome",
      "Mantine",
      "i18next",
      "oauth/google",
      "React-hook-form",
    ],
    highlights: [
      {
        metric: "6",
        label:
          "dashboard modules — overview, transactions, analytics, goals, investments, categories",
      },
      {
        metric: "Any language",
        label: "i18next architecture localizes the whole app to any locale — instant in-app switch",
      },
      { metric: "Light / Dark", label: "theming driven entirely by a Mantine token scale" },
      { metric: "100%", label: "responsive, mobile-first layouts down to 360px" },
    ],
    images: [
      { src: "/images/01-limebalance-landing.webp", caption: "Landing — hero & value proposition" },
      {
        src: "/images/02-limebalance-landing.webp",
        caption: "Cash-flow chart with income vs. spend",
      },
      {
        src: "/images/01-limebalance-dash.webp",
        caption: "Dashboard — overview with balance KPIs",
      },
      {
        src: "/images/03-limebalance-dash.webp",
        caption: "Analytics module — trends & savings rate",
      },
      { src: "/images/04-limebalance-dash.webp", caption: "Investments — portfolio & allocation" },
    ],
  },
  {
    id: "awin",
    name: "Awin",
    tagline: "Unified account, admin panel & shared core platform across product lines",
    meta: {
      role: "Senior Frontend Engineer",
      year: "2022 — Present",
      type: "Platform · Microfrontends",
    },
    live: [],
    description:
      "A unified personal account, admin panel and shared core platform used across multiple product lines. I owned frontend architecture, release stability and developer experience — building a reusable React core, a Module Federation microfrontend setup, and the testing and CI standards the teams ship on.",
    stack: [
      "React",
      "TypeScript",
      "Module Federation",
      "Playwright",
      "i18next",
      "Node.js",
      "Docker",
      "GitLab CI/CD",
    ],
    highlights: [
      {
        metric: "−40%",
        label: "initial bundle size via Module Federation, with improved security isolation",
      },
      {
        metric: "15 → 75%",
        label: "test coverage with Playwright E2E strategy — production bugs cut by 50%",
      },
      {
        metric: "4+",
        label: "projects reuse the modular React core; new-project setup 30% faster",
      },
      { metric: "−25%", label: "deployment time via Docker CI/CD pipelines & coding standards" },
    ],
    note: "Employer product — gallery shows placeholders. Drop real screenshots into public/images/awin-*.png to replace.",
    images: [
      { src: "/images/awin-1.webp", caption: "Unified personal account" },
      { src: "/images/awin-2.webp", caption: "Admin panel" },
      { src: "/images/awin-3.webp", caption: "Shared core platform" },
    ],
  },
  {
    id: "finanso",
    name: "Finanso",
    tagline: "Financial services platform — account, marketing site & real-time data",
    meta: { role: "Frontend Developer", year: "2019 — 2022", type: "Platform · Real-time" },
    live: [],
    description:
      "A financial services platform combining a personal account, a multi-page marketing site and real-time data services. I modernized a legacy codebase, led a company-wide UI Kit, and built a real-time debt-information service integrated with the Federal Bailiff Service over WebSocket.",
    stack: ["JavaScript", "SCSS", "WebSocket", "Webpack", "Gulp", "Pug", "UI Kit"],
    highlights: [
      {
        metric: "10K+",
        label: "daily active users on the real-time WebSocket debt-information service",
      },
      {
        metric: "−40%",
        label: "build time after modernizing the legacy Pug / Gulp / Webpack architecture",
      },
      {
        metric: "3 teams",
        label: "adopted the company-wide SCSS UI Kit — pixel-perfect & responsive",
      },
      {
        metric: "Real-time",
        label: "instant data updates via Federal Bailiff Service integration",
      },
    ],
    note: "Employer product — gallery shows placeholders. Drop real screenshots into public/images/finanso-*.png to replace.",
    images: [
      { src: "/images/finanso-1.webp", caption: "Personal account" },
      { src: "/images/finanso-2.webp", caption: "Marketing site" },
      { src: "/images/finanso-3.webp", caption: "Real-time debt service" },
    ],
  },
]

export const SKILLS: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    group: "UI / Styling",
    items: [
      "Mantine",
      "Tailwind CSS",
      "Styled Components",
      "SCSS",
      "CSS Modules",
      "MUI",
      "Ant Design",
      "Storybook",
    ],
  },
  {
    group: "Backend (Full-Stack)",
    items: ["Node.js", "NestJS", "PostgreSQL", "Fastify", "REST API", "GraphQL", "WebSocket"],
  },
  {
    group: "Architecture",
    items: ["Microfrontends", "Webpack Module Federation", "SSR / SSG"],
  },
  {
    group: "Testing",
    items: ["Playwright", "Jest", "End-to-End", "Unit Testing"],
  },
  {
    group: "Tooling & DevOps",
    items: [
      "Webpack",
      "Vite",
      "Turbopack",
      "Docker",
      "GitLab CI/CD",
      "ESLint",
      "Biome",
      "Git",
      "Figma",
    ],
  },
]
