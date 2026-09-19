<div align="center">

# Modern Personal Portfolio

A high-performance, dark-mode personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Resend**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

## 📖 Overview

This portfolio is designed with clean software architecture principles, interactive UI elements, hardware-accelerated animations, and server-side email handling.

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Production Deployment](#-production-deployment)
- [Featured Projects](#-featured-projects)
- [Contact & Socials](#-contact--socials)
- [License](#-license)

## ✨ Key Features

- **Hardware-Accelerated Marquee Ticker:** Dual-row, opposing infinite-scroll marquee showing tech stack icons. Optimized with GPU layer promotion (`translate3d`) and pause-on-hover.
- **Interactive Stacked Skill Cards:** 3D card stack built with Framer Motion, letting visitors tap through the Backend, Frontend, and Tooling categories.
- **Scroll-Driven Journey Timeline:** Vertical timeline with a progress bar that fills based on scroll depth (`useScroll` and `useSpring`).
- **Server Actions Contact Form:** Built with React's `useActionState` and Next.js Server Actions, with validation and email delivery through Resend.
- **Responsive Dark Theme System:** Custom CSS variable design system, custom scrollbar styling, glassmorphism card surfaces, and mobile-first layouts.

## 🛠️ Tech Stack

| Category        | Technology                                                |
| --------------- | --------------------------------------------------------- |
| Framework       | [Next.js 15](https://nextjs.org/) (App Router & Server Actions) |
| Language        | [TypeScript](https://www.typescriptlang.org/)             |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com/)               |
| Animations      | [Framer Motion](https://www.framer.com/motion/)           |
| Icons           | [Lucide React](https://lucide.dev/)                       |
| Email Delivery  | [Resend](https://resend.com/)                             |
| Deployment      | [Vercel](https://vercel.com/)                             |

## 📂 Project Structure

```text
porfolio
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── app
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── Jobemmanuel.pdf
│   ├── badgeprofile.jpeg
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── profile.png
│   ├── projectImages
│   │   ├── bee-magz.png
│   │   ├── ecclesia.png
│   │   ├── g-arcade.png
│   │   ├── mustnuel-media.png
│   │   └── wishly.png
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── components
│   │   ├── about
│   │   │   └── AboutSection.tsx
│   │   ├── contact
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── hero
│   │   │   ├── BioCard.tsx
│   │   │   ├── CodeTerminal.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── MiddleContent.tsx
│   │   ├── journey
│   │   │   ├── JourneySection.tsx
│   │   │   └── MilestoneCard.tsx
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── Navbar.tsx
│   │   ├── projects
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectsSection.tsx
│   │   ├── stack
│   │   │   ├── InteractiveStackCards.tsx
│   │   │   ├── MarqueeTicker.tsx
│   │   │   └── StackSection.tsx
│   │   ├── ui
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── SectionHeading.tsx
│   │   └── whatido
│   │       └── WhatIDoSection.tsx
│   ├── data
│   │   ├── journeyData.ts
│   │   ├── navData.ts
│   │   ├── projectsData.ts
│   │   ├── socialsIcon.tsx
│   │   ├── stackData.ts
│   │   ├── stackIcons.tsx
│   │   └── whatidoData.ts
│   ├── lib
│   │   ├── action.ts
│   │   └── utils.ts
│   └── types
│       └── index.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18.17.0 or higher
- **npm**, **pnpm**, or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/Emmanuelkorede/porfolio.git
cd porfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root folder and add your Resend API key:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

## 📦 Production Deployment

To create a production build and run it locally:

```bash
npm run build
npm run start
```

This project is optimized for deployment on [Vercel](https://vercel.com/).

## 📂 Featured Projects

| Project | Description |
| ------- | ----------- |
| **LodgeLink** | Hyperlocal accommodation platform for OAU students to discover and filter off-campus lodges. |
| **Ecclesia** | Multi-tenant Church Management SaaS with live QR/passcode attendance tracking and AI re-engagement. |
| **BeeMagz CMS** | Lightweight digital magazine and Content Management System built for a music video director. |
| **MM CBT** | Computer-Based Testing web app for Nigerian tertiary entrance preparation (JAMB & Post-UTME). |
| **Wishly** | Free scrapbook-style digital birthday card creator with expiring sticky notes and photo layouts. |

## 📬 Contact & Socials

- **GitHub:** [@Emmanuelkorede](https://github.com/Emmanuelkorede)
- **X (Twitter):** [@jobemmanuel_dev](https://x.com/jobemmanuel_dev)
- **Instagram:** [@job.emmauel.io](https://www.instagram.com/job.emmauel.io)
- **TikTok:** [@job.emmanuel.io](https://tiktok.com/@job.emmanuel.io)
- **WhatsApp:** [+234 912 286 5246](https://wa.me/2349122865246)
- **Email:** [emmanueljob2009@gmail.com](mailto:emmanueljob2009@gmail.com)

## 📄 License

This repository is available under the [MIT License](LICENSE).
