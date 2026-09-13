"use client";

import { BioCard } from "./BioCard";
import { MiddleContent } from "./MiddleContent";
import { CodeTerminal } from "./CodeTerminal";

export function HeroSection() {
  return (
    <section className="relative w-full py-20 lg:py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-background">
      <div className="max-w-7xl w-full mx-auto">
        {/* Desktop Layout: Fluid Grid with stretch alignment */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch">
          <div className="col-span-4 flex">
            <BioCard />
          </div>
          <div className="col-span-4 flex flex-col justify-between">
            <MiddleContent />
          </div>
          <div className="col-span-4 flex items-center justify-center">
            <CodeTerminal />
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="flex flex-col gap-6 lg:hidden items-center w-full max-w-md mx-auto">
          <BioCard />
          <MiddleContent />
          <CodeTerminal />
        </div>
      </div>
    </section>
  );
}