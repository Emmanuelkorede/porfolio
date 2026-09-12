"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, FileText } from 'lucide-react';
import { navLinks } from '@/src/data/navData';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 px-6 bg-background/80 backdrop-blur-md border-b border-border/50 z-50 flex md:hidden items-center justify-between">

      <Link href="/" className="font-bold text-lg tracking-wider text-foreground select-none">
        JOB <span className="text-accent underline decoration-accent decoration-2 underline-offset-4">EMMANUEL</span>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
        className="p-2 text-foreground hover:text-accent focus:outline-none transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-20 right-4 w-64 bg-card/95 border border-border rounded-2xl p-3 shadow-2xl backdrop-blur-xl flex flex-col gap-1 z-50 animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              >
                <Icon className="w-4 h-4 text-accent" />
                <span>{link.name}</span>
              </Link>
            );
          })}

          <hr className="border-border my-1" />

          <a
            href="/resume.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </header>
  );
}