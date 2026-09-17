"use client";

import Image from "next/image";
import { Card } from "../ui/Card";
import { ExternalLink, Wrench } from "lucide-react";
import { Github } from "@/src/data/socialsIcon";
import { Project } from "@/src/types";
import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

// Animation variants for individual cards
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0] // Smooth cubic-bezier curve
    } 
  }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc = project.imageUrl
    ? project.imageUrl
        .replace(/\\/g, "/")
        .replace(/^public\//, "/")
        .replace(/^(?!\/)/, "/")
    : null;
  const isBuilding = project.status.toUpperCase() === "BUILDING";
  const primaryUrl = project.liveUrl || project.githubUrl;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="group flex flex-col h-full border-border/70 hover:border-accent/60 transition-colors duration-300 overflow-hidden bg-card/60 backdrop-blur-sm">
        {/* Media / Preview Header */}
        <div className="relative w-full h-36 sm:h-44 bg-muted/40 border-b border-border/60 overflow-hidden flex items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-card via-muted/30 to-background p-4 text-center">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Wrench className="w-5 h-5 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                In Active Development
              </span>
            </div>
          )}

          {/* Status Badge Overlay */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border shadow-md backdrop-blur-md ${
                isBuilding
                  ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                  : "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-3">
          {/* Title */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-extrabold font-sans text-foreground tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-snug flex-1 font-sans">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1 pt-1">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs font-mono">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            ) : (
              <span />
            )}

            {primaryUrl ? (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-accent hover:underline font-semibold ml-auto"
              >
                <span>{project.liveUrl ? "Visit Site" : "View Details"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-muted-foreground/60 italic text-[11px]">
                Internal Preview
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}