"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { CORE_SKILLS } from "@/src/data/whatidoData";



export function WhatIDoSection() {
  return (
    <section id="services" className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col gap-8">
          {/* Section Heading */}
          <SectionHeading number="02" title="What I Do" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {CORE_SKILLS.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <Card
                  key={idx}
                  className="p-5 sm:p-6 flex flex-col gap-3.5 hover:border-accent/50 transition-all duration-300 group"
                >
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-foreground font-sans tracking-tight">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}