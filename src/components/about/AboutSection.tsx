"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Code, Database, Rocket, GraduationCap } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const ABOUT_CARDS = [
  {
    label: "EDUCATION",
    value: "Computer Science @ OAU",
    icon: "GraduationCap",
  },
  {
    label: "CORE STACK",
    value: "PERN, Next.js & TypeScript",
    icon: "Code",
  },
  {
    label: "FOCUS AREA",
    value: "Full-Stack SaaS & Backend Systems",
    icon: "Database",
  },
  {
    label: "STATUS",
    value: "Open to Internships & Roles",
    icon: "Rocket",
  },
] as const;

const ICON_MAP = {
  GraduationCap,
  Code,
  Database,
  Rocket,
};

// Variants for staggered entrance of cards
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Card slide-up animation
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    } 
  },
};

// Bio paragraph fade/slide animation
const bioVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Side: Sticky Section Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading number="01" title="About Me" />
          </div>

          {/* Right Side: Bio & Highlight Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Animated Bio Paragraphs */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={bioVariants}
              className="space-y-4 text-muted-foreground font-sans text-sm sm:text-base leading-relaxed"
            >
              <p>
                  My journey into software development started with curiosity , experimenting with <span className="text-foreground font-medium">Scratch</span>, 3D modeling, and eventually web development. That curiosity grew into a focus on building full-stack applications and understanding how the pieces behind them fit together.
                </p>

                <p>
                  Today, I enjoy turning ideas into working products, from designing database structures and building APIs to creating interfaces that people can actually use. I care about understanding what I'm building, solving problems properly, and continuously improving how I engineer software.
                </p>
            </motion.div>

            {/* Animated Highlight Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border/40"
            >
              {ABOUT_CARDS.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Code;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <Card className="p-3.5 flex items-center gap-3.5 hover:border-accent/50 transition-colors duration-200 h-full">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                          {item.value}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}