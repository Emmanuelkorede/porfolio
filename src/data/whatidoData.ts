
import { Layers, Database, Server, Layout } from "lucide-react";


export const CORE_SKILLS = [
  {
    title: "Full-Stack SaaS Engineering",
    description:
      "Building and launching production-ready, multi-tenant applications from scratch using React, Next.js, and TypeScript.",
    icon: Layers,
  },
  {
    title: "Relational Database Architecture",
    description:
      "Structuring, optimizing, and managing relational databases and secure data flows with PostgreSQL, Supabase, and Neon.",
    icon: Database,
  },
  {
    title: "Backend & API Development",
    description:
      "Designing robust server-side logic, routing, and scalable endpoints using Node.js and Express.js.",
    icon: Server,
  },
  {
    title: "Responsive UI & System Design",
    description:
      "Crafting clean, mobile-first user interfaces with Tailwind CSS while maintaining clean version control workflows via Git.",
    icon: Layout,
  },
] as const;