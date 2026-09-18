import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: 'LodgeLink',
    status: "BUILDING",
    description: "A hyperlocal accommodation platform for OAU students to discover verified off-campus lodges and connect directly with agents.",
    stack: ["Next js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Ecclesia",
    status: "Live",
    description: "A multi-tenant church management SaaS for managing attendance, members, ministries, events, analytics, and member communication.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://ecclesia-church.vercel.app/",
    githubUrl: "https://github.com/Emmanuelkorede/Ecclesia",
    imageUrl: "/projectImages/ecclesia.png"
  },
  {
    title: "BeeMagz CMS",
    status: "Live",
    description: "A digital magazine and CMS built for a music video director, with a public reader experience and admin dashboard for managing content.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Neon",
      "Cloudinary",
    ],
    liveUrl: "https://bee-magazine.vercel.app/",
    githubUrl: "https://github.com/Emmanuelkorede/dir-bee-magazine",
    imageUrl: "/projectImages/bee-magz.png"
  },
  {
    title: "MM CBT (Mustnuel Media CBT)",
    status: "Live",
    description: "A high-performance CBT web application for Nigerian entrance exam preparation, featuring dual exam modes, community feeds, and an admin dashboard.",
    stack: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    liveUrl: "https://mustnuel-media-cbt.vercel.app/",
    githubUrl: "https://github.com/Emmanuelkorede/mustnuel-media-cbt",
    imageUrl: "/projectImages/mustnuel-media.png"
  },
  {
    title: "Wishly",
    status: "Live",
    description: "A free digital birthday card creator featuring a scrapbook aesthetic, interactive gift boxes, and auto-expiring journal messages.",
    stack: ["NEXT js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveUrl: "https://wishly-weld.vercel.app",
    githubUrl: "https://github.com/Emmanuelkorede/wishly",
    imageUrl: "/projectImages/wishly.png"
  },
  {
  title: "Goodness Arcade",
  status: "Live",
  description: "A personal mini-game arcade built with five original games, local high scores, and full offline PWA support.",
  stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  liveUrl: "https://goodness-arcade.vercel.app/arcade",
  githubUrl: "https://github.com/Emmanuelkorede/Goodness",
  imageUrl: "/projectImages/g-arcade.png"
  }
];