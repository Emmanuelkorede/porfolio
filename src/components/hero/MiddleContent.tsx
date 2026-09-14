"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function MiddleContent() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
      setTimeString(`${dateStr} ${timeStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center  h-full gap-6">
      {/* Top Header Badge & Live Time */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex items-center gap-3 bg-card/80 backdrop-blur-md border border-border rounded-full py-1.5 px-3.5 shadow-sm">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted shrink-0">
            <Image
              src="/badge.jpeg"
              alt="Job Emmanuel"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-foreground leading-none">Job Emmanuel</p>
            <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">Software Developer</p>
          </div>
        </div>

        <span className="text-xs font-mono text-muted-foreground tracking-wider">
          {timeString}
        </span>
      </div>

      {/* Main Headline & Paragraph */}
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-sans font-bold text-foreground leading-[1.08] tracking-tight">
          I build <span className="text-accent">Web</span>
          <br />
          Solutions.
        </h1>
        
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed max-w-md">
          Full-stack software engineer and undergraduate student at OAU, focused on building high-performance web applications, multi-tenant SaaS products, and robust backend architectures that turn complex problems into seamless digital experiences.
        </p>
      </div>

      {/* Stats Counter Row */}
      <div className="flex items-center gap-10 pt-4 border-t border-border/30">
        <div>
          <p className="text-3xl sm:text-4xl font-sans font-bold text-foreground tracking-tight">
            2+
          </p>
          <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mt-0.5">
            Years Experience
          </p>
        </div>

        <div>
          <p className="text-3xl sm:text-4xl font-sans font-bold text-foreground tracking-tight">
            10+
          </p>
          <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mt-0.5">
            Projects Completed
          </p>
        </div>
      </div>
    </div>
  );
}