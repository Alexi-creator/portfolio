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
  role: "Full-Stack Engineer",
  subrole: "Node.js / NestJS / React / Next.js / TypeScript",
  location: "Full-stack across the entire stack — NestJS · Node.js · Postgres · React",
  email: "pavlov.il.creator@gmail.com",
  linkedin: "linkedin.com/in/illpavlov",
  linkedinUrl: "https://linkedin.com/in/illpavlov",
  telegram: "@ilya_pavlov90",
  telegramUrl: "https://t.me/ilya_pavlov90",
  resume: "/Elijah_Pavlov_Resume.pdf",
  summary:
    "Full-Stack Engineer with 7+ years building production-grade web applications across the entire stack — from REST API design and NestJS/Node.js backends to scalable React/Next.js frontends. I own API contracts and integration logic alongside frontend architecture: microfrontend systems, 35% load-time improvement, and test coverage scaled from 15% to 75%. Experienced in system architecture, cross-functional collaboration with backend teams, and mentoring developers.",
}

// Headline metrics pulled from real impact at Awin
export const STATS: Stat[] = [
  { value: "7+", unit: "yrs", label: "shipping full-stack in production" },
  { value: "REST", unit: "API", label: "contracts & NestJS integration owned" },
  { value: "75", unit: "%", label: "test coverage, up from 15%" },
  { value: "−35", unit: "%", label: "page load time, Lighthouse-verified" },
]

export const PROJECTS: Project[] = [
  {
    id: "limebalance",
    name: "Limebalance",
    tagline: "Personal finance dashboard — budgets, goals & crypto in one place",
    meta: { role: "Full-stack", year: "2026", type: "Product · SPA" },
    live: [
      { label: "Dashboard", href: "https://app.limebalance.com/" },
      { label: "GitHub - backend", href: "https://github.com/Alexi-creator/limebalance" },
      { label: "GitHub - frontend", href: "https://github.com/Alexi-creator/limebalance-cab" },
    ],
    description:
      "A token-driven finance product spanning a marketing site and a six-module dashboard. Built on a Mantine-aligned design system with full internationalization, a light/dark theme engine, and live SVG-rendered charts for LimeBalance, analytics and portfolio allocation.",
    stack: [
      "React",
      "TypeScript",
      "Module Css",
      "NestJs",
      "Postgres",
      "JWT",
      "Prisma",
      "Zustand",
      "Zod",
      "TanStack Query",
      "Vite",
      "Biome",
      "Mantine",
      "i18next",
      "oauth/google",
      "React-hook-form",
      "CI-CD Actions",
      "Playwright",
      "Jest",
    ],
    highlights: [
      {
        metric: "5",
        label:
          "dashboard modules — overview, transactions, analytics, goals, investments, categories",
      },
      {
        metric: "Any language",
        label: "i18next architecture localizes the whole app to any locale — instant in-app switch",
      },
      {
        metric: "Light / Dark",
        label: "theming driven entirely by a Mantine token scale",
      },
      {
        metric: "100%",
        label: "responsive, mobile-first layouts down to 360px",
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
    id: "awin",
    name: "Awin",
    tagline: "Unified account, admin panel & shared core platform across product lines",
    meta: {
      role: "Full-Stack Engineer",
      year: "2022 — Present",
      type: "Platform · Full-Stack",
    },
    live: [],
    description:
      "A unified personal account, admin panel and shared core platform used across multiple product lines. I contribute to the full delivery lifecycle — co-owning REST API contracts and NestJS schema/DTO validation with the backend team, building the Node.js integration layer to backend microservices, and owning the frontend architecture, testing and CI standards the teams ship on.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "REST API",
      "WebSocket",
      "class-validator",
      "Module Federation",
      "Webpack",
      "Formik",
      "Styled components",
      "Mui",
      "EsLint",
      "Storybook",
      "Playwright",
      "i18next",
      "Docker",
      "GitLab CI/CD",
    ],
    highlights: [
      {
        metric: "REST + WS",
        label:
          "API contracts co-owned with backend — NestJS DTO validation & Node.js integration layer",
      },
      {
        metric: "15 → 75%",
        label: "test coverage with Playwright E2E strategy — production bugs cut by 50%",
      },
      {
        metric: "−40%",
        label: "initial bundle size via Module Federation, with improved security isolation",
      },
      {
        metric: "−25%",
        label: "deployment time via Docker CI/CD pipelines & coding standards",
      },
    ],
    images: [],
  },
  {
    id: "finanso",
    name: "Finanso",
    tagline: "Financial services platform — account, marketing site & real-time data",
    meta: { role: "Frontend Developer", year: "2019 — 2022", type: "Platform · Real-time" },
    live: [{ label: "Site", href: "https://finanso.com/" }],
    description:
      "A financial services platform combining a personal account, a multi-page marketing site and real-time data services. I modernized a legacy codebase, led a company-wide UI Kit, and built a real-time debt-information service integrated with the Federal Bailiff Service over WebSocket.",
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
      "NestJS",
      "Fastify",
      "REST API design & validation",
      "GraphQL",
      "WebSocket",
      "PostgreSQL",
      "Prisma",
      "API schema contracts",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    group: "Architecture",
    items: [
      "Microfrontends",
      "Webpack Module Federation",
      "SSR / SSG",
      "Monorepo / Git submodules",
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
