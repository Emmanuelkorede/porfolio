"use client";

import  { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/src/data/navData';

export function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '/');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1.5 p-2 bg-card/90 backdrop-blur-md border border-border rounded-full shadow-2xl">
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = 
          link.href === '/' 
            ? pathname === '/' && !activeHash 
            : activeHash === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            title={link.name}
            className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-muted text-accent'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon className="w-5 h-5 stroke-[1.75]" />
            {isActive && (
              <span className="absolute -top-1 w-1 h-1 bg-accent rounded-full animate-pulse" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}