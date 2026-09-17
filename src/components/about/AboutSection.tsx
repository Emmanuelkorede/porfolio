"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Code, Database, Rocket, GraduationCap } from "lucide-react";

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
            <div className="space-y-4 text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
              <p>
                My journey into software engineering began with early curiosity experimenting with block logic (
                <span className="text-foreground font-medium">Scratch</span>) and 3D modeling before evolving into a dedicated focus on full-stack web development.
              </p>

              <p>
                Beyond tutorial-driven learning, my primary focus is engineering production-ready software designed to solve real-world problems. I prioritize clean code, efficient database design, and seamless user experiences in every application I build.
              </p>
            </div>

            {/* Core Technical Highlights using Card Component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border/40">
              {ABOUT_CARDS.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Code;
                return (
                  <Card
                    key={idx}
                    className="p-3.5 flex items-center gap-3.5 hover:border-accent/50 transition-colors duration-200"
                  >
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}