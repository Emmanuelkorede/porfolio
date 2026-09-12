import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`relative mb-12 select-none ${className}`}>
      {/* Background Accent Number */}
      <span className="absolute -top-10 -left-1 text-7xl sm:text-8xl md:text-9xl font-mono font-bold text-accent/20 tracking-tighter leading-none pointer-events-none z-0">
        {number}
      </span>

      {/* Foreground Header Content */}
      <div className="relative z-10 pt-8 sm:pt-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-foreground tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};