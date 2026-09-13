"use client";

import React from "react";
import { BioCard } from "./BioCard";
import { MiddleContent } from "./MiddleContent";
import { CodeTerminal } from "./CodeTerminal";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-center bg-background">
      <div className="max-w-7xl w-full mx-auto">
        {/* Desktop View: 3-column Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          <div className="col-span-4 flex">
            <BioCard />
          </div>
          <div className="col-span-4 flex flex-col justify-between">
            <MiddleContent />
          </div>
          <div className="col-span-4 flex items-center">
            <CodeTerminal />
          </div>
        </div>

        {/* Mobile / Tablet View: Stacked Layout (Middle path hidden as requested) */}
        <div className="flex flex-col gap-8 lg:hidden items-center w-full">
          <BioCard />
          <CodeTerminal />
        </div>
      </div>
    </section>
  );
}