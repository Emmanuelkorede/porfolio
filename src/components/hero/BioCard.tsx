"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, MessageCircle } from "lucide-react";
import { Github , TikTok , Twitter } from "@/src/data/socialsIcon";


export function BioCard() {
  const words = ["a Developer", "Job Emmanuel", "job.exe"];
  
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
    <div className="relative bg-card border border-border rounded-3xl p-4 flex flex-col justify-between overflow-hidden shadow-xl w-full h-full">
      {/* Background Image Container */}
      <div className="relative w-full aspect-[1.1/1] rounded-2xl overflow-hidden bg-muted group shrink-0">
        <Image
          src="/profile.png"
          alt="Job Emmanuel"
          fill
          priority
          className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
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
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Card Body */}
      <div className="relative z-10 pt-3 flex flex-col justify-end mt-auto gap-2.5">
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground font-sans tracking-tight flex items-center min-h-8">
            Hey, I&apos;m&nbsp;<span className="text-accent">{displayedText}</span>
            <span className="animate-pulse text-accent font-light ml-0.5">|</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
            Computer Science student at OAU building and shipping real-world web applications and SaaS products.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href="#projects"
            aria-label="View Work"
            className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-all duration-200 shrink-0"
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </Link>

          <Link
            href="#contact"
            className="flex-1 py-2.5 px-4 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-medium text-center hover:bg-accent/90 transition-all duration-200"
          >
            Let&apos;s talk
          </Link>

          <a
            href="/Jobemmanuel.pdf"
            download="Emmanuel_Job_CV.pdf"
            className="py-2.5 px-4 rounded-full bg-muted border border-border text-foreground text-xs sm:text-sm font-medium flex items-center gap-1.5 hover:bg-muted/80 transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}