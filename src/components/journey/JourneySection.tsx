"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Compass, Flag, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { JOURNEY_MILESTONES } from "@/src/data/journeyData";
import { MilestoneCard } from "./MilestoneCard";

const MILESTONE_ICONS = [Compass, Flag, Sparkles, Rocket];

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

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
            {JOURNEY_MILESTONES.map((milestone, idx) => (
              <MilestoneCard
                key={idx}
                milestone={milestone}
                icon={MILESTONE_ICONS[idx % MILESTONE_ICONS.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}