"use client";

import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const thisYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background text-foreground pt-16 pb-32 px-6 sm:px-12 md:px-20 border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Quote */}
        <p className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-foreground tracking-wide">
          &ldquo;Curiosity sparked the code; building keeps the fire going&rdquo;
        </p>

        {/* Side-by-Side Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left Block: Name & Copyright */}
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl sm:text-8xl md:text-[9rem] font-bold tracking-tighter text-foreground font-sans leading-none">
              job.exe
            </h1>
            <div className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
              <p>All rights reserved</p>
              <p>&copy; {thisYear} Job Emmanuel</p>
            </div>
          </div>

          {/* Right Block: Upside-Down Outlined Text & Top Arrow on Same Line */}
          <div className="flex items-end gap-4 self-end md:self-auto">
            <div className="rotate-180 select-none">
              <span
                className="text-6xl sm:text-7xl md:text-9xl font-bold font-sans text-transparent tracking-tighter opacity-30 block leading-none"
                style={{ WebkitTextStroke: '1.5px var(--color-muted-foreground)' }}
              >
                Emmanuel
              </span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border text-foreground hover:text-accent hover:border-accent transition-all duration-300 shadow-lg shrink-0 mb-2"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}