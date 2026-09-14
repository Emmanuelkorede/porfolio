"use client";

import { BioCard } from "./BioCard";
import { MiddleContent } from "./MiddleContent";
import { CodeTerminal } from "./CodeTerminal";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] pt-20 pb-10 lg:pt-8 lg:pb-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-background">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Bio Card */}
          <div className="w-full max-w-md mx-auto md:max-w-none flex">
            <BioCard />
          </div>

          {/* Middle Content */}
          <div className="w-full max-w-md mx-auto md:max-w-none flex flex-col justify-center">
            <MiddleContent />
          </div>

          {/* Terminal (Vertically centered, natural content height) */}
          <div className="w-full max-w-md mx-auto md:max-w-none md:col-span-2 lg:col-span-1 flex items-center justify-center">
            <CodeTerminal />
          </div>

        </div>
      </div>
    </section>
  );
}