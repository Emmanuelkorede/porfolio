"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/src/data/projectsData";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Section Heading */}
        <SectionHeading number="03" title="Featured Work" />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title || idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}