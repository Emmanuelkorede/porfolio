"use client";

import { stackItems } from "@/src/data/stackData";
import { TechIcon } from "@/src/data/stackIcons";

export function MarqueeTicker() {
  // Split items into two rows for opposing scroll directions
  const halfLength = Math.ceil(stackItems.length / 2);
  const row1 = stackItems.slice(0, halfLength);
  const row2 = stackItems.slice(halfLength);

  return (
    <div className="w-full overflow-hidden space-y-3 py-2 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Row 1 - Leftward Scroll */}
      <div className="flex w-max animate-marquee space-x-3">
        {[...row1, ...row1, ...row1, ...row1].map((item, idx) => (
          <div
            key={`r1-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 border border-border/60 hover:border-accent/40 transition-colors backdrop-blur-sm shrink-0"
          >
            <TechIcon name={item.iconName} className="w-4 h-4 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-foreground font-sans">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 - Rightward Scroll */}
      <div className="flex w-max animate-marquee-reverse space-x-3">
        {[...row2, ...row2, ...row2, ...row2].map((item, idx) => (
          <div
            key={`r2-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 border border-border/60 hover:border-accent/40 transition-colors backdrop-blur-sm shrink-0"
          >
            <TechIcon name={item.iconName} className="w-4 h-4 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-foreground font-sans">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}