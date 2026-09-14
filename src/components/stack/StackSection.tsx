"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { MarqueeTicker } from "./MarqueeTicker";
import { InteractiveStackCards } from "./InteractiveStackCards";
import { CheckCircle2 } from "lucide-react";

export const PERSONAL_DETAILS = {
  softSkills: [
    "Problem Solving",
    "Critical Thinking",
    "Technical Communication",
    "Time Management",
    "Adaptability",
    "Teamwork",
  ],
  interests: ["SaaS Building", "System Architecture", "AI Integration"],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Yoruba", level: "Native" },
  ],
};

export function StackSection() {
  return (
    <section id="stack" className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl w-full mx-auto space-y-12 sm:space-y-16">
        {/* Section Heading - Number 04 */}
        <SectionHeading number="04" title="Skills & Tech Stack" />

        {/* Dual Opposing Marquee Tickers */}
        <MarqueeTicker />

        {/* Main Grid: Interactive Cards (Left) + Personal Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4">
          {/* Left Column: Interactive Stacked Cards */}
          <div className="lg:col-span-6">
            <InteractiveStackCards />
          </div>

          {/* Right Column: Soft Skills, Interests & Languages */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Soft Skills Section */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight italic font-sans">
                Soft skill
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_DETAILS.softSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interest & Language Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-border/40">
              {/* Interest */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight italic font-sans">
                  Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_DETAILS.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-card border border-border/60 text-xs sm:text-sm font-medium text-foreground hover:border-accent/40 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight italic font-sans">
                  Language
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_DETAILS.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-card border border-border/60 text-xs sm:text-sm font-medium text-foreground hover:border-accent/40 transition-colors"
                    >
                      {lang.name} ({lang.level})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}