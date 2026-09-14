"use client";

import  { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { JOURNEY_MILESTONES } from "@/src/data/journeyData";
import { Check, Compass, Flag, Rocket, Sparkles } from "lucide-react";

const MILESTONE_ICONS = [Compass, Flag, Sparkles, Rocket];

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  // Smooth out the progress bar spring physics
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Section Heading */}
        <SectionHeading number="05" title="My Journey" />

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Timeline Background Track Line */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-border/60" />

          {/* Animated Flow Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-accent origin-top shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          />

          {/* Milestones List */}
          <div className="space-y-8 sm:space-y-10">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const MilestoneIcon = MILESTONE_ICONS[idx % MILESTONE_ICONS.length];

              return (
                <div key={idx} className="relative group">
                  {/* Outer Node Circle on Timeline */}
                  <div className="absolute -left-[23px] sm:-left-[31px] top-6 w-6 h-6 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors duration-300 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors duration-300" />
                  </div>

                  {/* Milestone Content Card */}
                  <Card className="p-6 sm:p-8 flex flex-col gap-4 border-border/70 hover:border-accent/50 transition-all duration-300">
                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-xs font-mono font-semibold text-accent uppercase tracking-wider">
                        {milestone.period}
                      </span>
                      <MilestoneIcon className="w-5 h-5 text-muted-foreground/60 group-hover:text-accent transition-colors duration-300" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold font-sans text-foreground tracking-tight uppercase">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Achievements List */}
                    {milestone.achievements && milestone.achievements.length > 0 && (
                      <div className="pt-3 border-t border-border/40 space-y-3">
                        {milestone.listTitle && (
                          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80 font-bold">
                            {milestone.listTitle}
                          </p>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {milestone.achievements.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-medium text-foreground/90">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                        {/* Footer Quote */}
                        {milestone.quote && (
                        <p className="italic text-xs font-mono text-accent/80 pt-2">
                            {`"${milestone.quote}"`}
                        </p>
                        )}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}