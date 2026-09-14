import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`bg-card text-card-foreground border border-border rounded-xl p-4 transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-background/50'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};