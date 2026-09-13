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
    <div className="flex flex-col justify-between py-2 px-4 h-full">
      {/* Top Header Badge & Live Time */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 bg-card border border-border rounded-full py-1.5 px-3.5">
          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-muted">
            <Image
              src="/images/profile.jpeg"
              alt="Job Emmanuel"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-foreground">Job Emmanuel</p>
            <p className="text-[10px] text-muted-foreground">Software Developer</p>
          </div>
        </div>

        {/* Live Clock */}
        <span className="text-xs font-mono text-muted-foreground tracking-wider">
          {timeString}
        </span>
      </div>

      {/* Main Headline */}
      <div className="my-8">
        <h1 className="text-5xl lg:text-6xl font-sans font-bold text-foreground leading-[1.1] tracking-tight">
          I build <span className="text-accent">Web</span>
          <br />
          Solutions.
        </h1>
        
        <p className="mt-6 text-sm lg:text-base text-muted-foreground font-sans leading-relaxed max-w-lg">
          Full-stack software engineer and undergraduate student at OAU, focused on building high-performance web applications, multi-tenant SaaS products, and robust backend architectures that turn complex problems into seamless digital experiences.
        </p>
      </div>

      {/* Stats Counter Row */}
      <div className="flex items-center gap-12 pt-4 border-t border-border/40">
        <div>
          <p className="text-4xl lg:text-5xl font-sans font-bold text-foreground tracking-tight">
            2+
          </p>
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mt-1">
            Years Experience
          </p>
        </div>

        <div>
          <p className="text-4xl lg:text-5xl font-sans font-bold text-foreground tracking-tight">
            10+
          </p>
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mt-1">
            Projects Completed
          </p>
        </div>
      </div>
    </div>
  );
}