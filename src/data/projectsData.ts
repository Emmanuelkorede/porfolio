import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title : 'LodgeLink' ,
    status : "BUILDING" ,
    description : "A hyperlocal accommodation platform for OAU students to discover off-campus lodges in one place. Students can browse verified listings, filter by area, price and room type, view detailed information, and contact agents directly on WhatsApp. The platform also helps agents showcase their available properties and reach students actively searching for accommodation." ,
    stack: ["Next js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Ecclesia",
    status: "Live",
    description:
      "A modern, multi-tenant Church Management SaaS platform designed to streamline attendance tracking, ministry management, and member engagement for churches of every size. Features live attendance sessions with expiring passcodes and QR codes, sub-ministry management, engagement analytics, congregation communication, and AI member re-engagement.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://ecclesia-church.vercel.app/",
    githubUrl: "https://github.com/Emmanuelkorede/Ecclesia",
    imageUrl : '/projectImages\ecclesia.png'
  },
  {
    title: "BeeMagz CMS",
    status: "Live",
    description:
      "A modern, lightweight, dynamic digital magazine and Content Management System (CMS) built for a music video director. Features a dual-sided architecture with an admin dashboard and a sleek public reader interface supporting images, videos, and music URLs.",
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
    imageUrl : '/projectImages\bee-magz.png'
  },
  {
    title: "MM CBT (Mustnuel Media CBT)",
    status: "Live",
    description:
      "A feature-rich, high-performance Computer-Based Testing (CBT) web application designed to help students prepare for Nigerian tertiary entrance examinations (JAMB and Post-UTME). Features dual exam modes, smart tier enforcement, an interactive community feed, and a full admin control center.",
    stack: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    liveUrl: "https://mustnuel-media-cbt.vercel.app/",
    githubUrl: "https://github.com/Emmanuelkorede/mustnuel-media-cbt",
    imageUrl : "/projectImages\mustnuel-media.png"
  },
  {
    title: "Wishly",
    status: "Live",
    description:
      "A free, no-signup digital birthday card creator built around a scrapbook and handwritten journal aesthetic. Allows users to create interactive gift boxes with cakes, polaroid photos, and sticky-note messages that automatically expire after 30 days.",
    stack: ["NEXT js", "TypeScript", "Tailwind CSS", "Supabase" , "PostgreSQL"],
    liveUrl: "https://wishly-weld.vercel.app",
    githubUrl: "https://github.com/Emmanuelkorede/wishly",
    imageUrl : "/projectImages\wishly.png"
  },
];