import { Layout, Server, Database, Layers, Smartphone, Code2 } from "lucide-react";

export const CORE_SKILLS = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, interactive web interfaces using React, Next.js, TypeScript, and Tailwind CSS with a focus on usability.",
    icon: Layout,
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Designing server-side applications, REST APIs, authentication flows, and business logic with Node.js and Express.js.",
    icon: Server,
  },
  {
    number: "03",
    title: "Database & Data Architecture",
    description:
      "Designing relational data models and managing application state with PostgreSQL, Supabase, and Neon.",
    icon: Database,
  },
  {
    number: "04",
    title: "Full-Stack SaaS Development",
    description:
      "Taking complex ideas from concept to production-ready multi-tenant software across the full PERN stack and cloud deployment.",
    icon: Layers,
  },
  {
    number: "05",
    title: "Responsive Design & Systems",
    description:
      "Creating modern user interfaces and component design systems that adapt seamlessly across all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Problem Solving & Logic",
    description:
      "Breaking down complex technical requirements, debugging full-stack workflows, and engineering practical solutions through clean code.",
    icon: Code2,
  },
] as const;