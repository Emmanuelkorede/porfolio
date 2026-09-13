"use client";

import { BioCard } from "./BioCard";
import { MiddleContent } from "./MiddleContent";
import { CodeTerminal } from "./CodeTerminal";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-16 lg:pt-20 pb-12 px-4 sm:px-6 lg:px-12 flex items-center justify-center bg-background">
      <div className="max-w-7xl w-full mx-auto">
        {/* Desktop Layout: Fits fully within standard screen height */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
          <div className="col-span-4 flex">
            <BioCard />
          </div>
          <div className="col-span-4 flex flex-col justify-between h-full">
            <MiddleContent />
          </div>
          <div className="col-span-4 flex items-center">
            <CodeTerminal />
          </div>
        </div>

        {/* Mobile / Tablet Layout: Stacks all 3 components vertically */}
        <div className="flex flex-col gap-6 lg:hidden items-center w-full max-w-md mx-auto">
          <BioCard />
          <MiddleContent />
          <CodeTerminal />
        </div>
      </div>
    </section>
  );
}