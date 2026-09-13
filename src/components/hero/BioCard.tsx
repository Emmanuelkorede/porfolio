"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, MessageCircle } from "lucide-react";

const Github = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const TikTok = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function BioCard() {
  const words = ["a Developer", "Job Emmanuel", "job.exe", "a Full-Stack Engineer"];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullWord.substring(0, displayedText.length + 1));
        
        if (displayedText === fullWord) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(100);
        }
      } else {
        setDisplayedText(fullWord.substring(0, displayedText.length - 1));
        
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed, words]);

  const socials = [
    { icon: Github, href: "https://github.com/Emmanuelkorede", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/jobemmanuel_dev", label: "X (Twitter)" },
    { icon: TikTok, href: "https://tiktok.com/@job.emmanuel.io", label: "TikTok" },
    { icon: MessageCircle, href: "https://wa.me/2349122865246", label: "WhatsApp" },
  ];

  return (
    <div className="relative bg-card border border-border rounded-3xl p-4 flex flex-col justify-between overflow-hidden shadow-xl w-full">
      {/* Background Image Container with Overlay */}
      <div className="relative w-full h-[240px] sm:h-[260px] lg:h-[230px] rounded-2xl overflow-hidden bg-muted group">
        <Image
          src="/images/profile.jpeg"
          alt="Job Emmanuel"
          fill
          priority
          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />

        {/* Floating Social Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-md border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:scale-110 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Card Body */}
      <div className="relative z-10 pt-3 flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground font-sans tracking-tight flex items-center min-h-[32px]">
          Hey, I&apos;m&nbsp;<span className="text-accent">{displayedText}</span>
          <span className="animate-pulse text-accent font-light ml-0.5">|</span>
        </h1>

        <p className="text-xs text-muted-foreground font-sans leading-relaxed">
          Computer Science student at OAU with a proven track record of shipping production-ready web apps and SaaS products.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href="#projects"
            aria-label="View Work"
            className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-all duration-200 shrink-0"
          >
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <Link
            href="#contact"
            className="flex-1 py-2 px-3 rounded-full bg-accent text-accent-foreground text-xs font-medium text-center hover:bg-accent/90 transition-all duration-200"
          >
            Let&apos;s talk
          </Link>

          <a
            href="/resume.pdf"
            download
            className="py-2 px-3 rounded-full bg-muted border border-border text-foreground text-xs font-medium flex items-center gap-1 hover:bg-muted/80 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}