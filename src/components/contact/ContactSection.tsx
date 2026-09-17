"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { Github , Twitter , TikTok  , Instagram} from "@/src/data/socialsIcon";


const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "EMAIL",
    handle: "emmanueljob2009@gmail.com",
    href: "mailto:emmanueljob2009@gmail.com",
  },
  {
    icon: Github,
    label: "GITHUB",
    handle: "Emmanuelkorede",
    href: "https://github.com/Emmanuelkorede",
  },
  {
    icon: Twitter,
    label: "X (TWITTER)",
    handle: "@jobemmanuel_dev",
    href: "https://x.com/jobemmanuel_dev",
  },
  {
    icon: Instagram,
    label: "INSTAGRAM",
    handle: "@job.emmauel.io",
    href: "https://www.instagram.com/job.emmauel.io?stkn=MXVub2Z3ZTM4NXJjdA==",
  },
  {
    icon: TikTok,
    label: "TIKTOK",
    handle: "@job.emmanuel.io",
    href: "https://tiktok.com/@job.emmanuel.io",
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    handle: "+234 912 286 5246",
    href: "https://wa.me/2349122865246",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Section Heading */}
        <SectionHeading number="06" title="Get In Touch" />

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading + Social Links Row */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-foreground tracking-tight uppercase">
                HAVE AN IDEA WORTH BUILDING?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg font-mono">
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed italic">
                I'm usually building something new. Whether you have an ambitious idea or a technical challenge — I'd love to hear about it.
              </p>
            </div>

            {/* Social Links Rows */}
            <div className="divide-y divide-border/60 border-t border-b border-border/60">
              {SOCIAL_LINKS.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-card border border-border/60 flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/50 transition-colors shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 truncate">
                        <span className="text-[10px] font-mono font-semibold tracking-widest text-muted-foreground uppercase">
                          {link.label}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                          {link.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-card/40 border border-border/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}