"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/src/data/projectsData";
import { motion, Variants } from "framer-motion";

// Container variant to handle staggered entrance of child cards
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card's entrance
    },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Section Heading */}
        <SectionHeading number="03" title="Featured Work" />

        {/* Staggered Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before full view
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title || idx} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}