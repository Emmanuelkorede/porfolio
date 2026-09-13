"use client";

import  { useState, useEffect } from "react";
import Image from "next/image";

export function MiddleContent() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimeString(`${dateStr} ${timeStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full py-1">
      {/* Top Header Badge & Live Time (Hidden on Mobile) */}
      <div className="hidden lg:flex items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-2.5 bg-card border border-border rounded-full py-1 px-3">
          <div className="relative w-6 h-6 rounded-full overflow-hidden bg-muted">
            <Image
              src="/images/profile.jpeg"
              alt="Job Emmanuel"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-[11px]">
            <p className="font-semibold text-foreground leading-none">Job Emmanuel</p>
            <p className="text-[9px] text-muted-foreground leading-tight">Software Developer</p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-muted-foreground tracking-wider">
          {timeString}
        </span>
      </div>

      {/* Main Headline */}
      <div className="my-2 lg:my-0">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-sans font-bold text-foreground leading-[1.05] tracking-tight">
          I build <span className="text-accent">Web</span>
          <br />
          Solutions.
        </h1>
        
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed max-w-lg">
          Full-stack software engineer and undergraduate student at OAU, focused on building high-performance web applications, multi-tenant SaaS products, and robust backend architectures that turn complex problems into seamless digital experiences.
        </p>
      </div>

      {/* Stats Counter Row */}
      <div className="flex items-center gap-8 pt-3 border-t border-border/40 mt-3 lg:mt-0">
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