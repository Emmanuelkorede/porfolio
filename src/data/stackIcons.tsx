import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-4 h-4" }) => {
  switch (name.toLowerCase()) {
    case "html5":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.613H5.574l.328 3.688h11.237l-.46 5.152-4.686 1.3-4.667-1.3-.298-3.344H3.327l.549 6.162 8.09 2.246 8.093-2.246 1.041-11.66z" fill="#E34F26" />
        </svg>
      );

    case "css3":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.613H5.574l.328 3.688h11.237l-.46 5.152-4.686 1.3-4.667-1.3-.298-3.344H3.327l.549 6.162 8.09 2.246 8.093-2.246 1.041-11.66z" fill="#1572B6" />
        </svg>
      );

    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6.75 19.5h2.25v-8.25H6.75V19.5zm5.25 0h2.25v-4.5c0-1.875 1.125-2.25 2.25-2.25v-2.25c-1.875 0-3 1.125-3.75 2.25V11.25H12V19.5z" fill="#000000" />
        </svg>
      );

    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 12.5H8v1.8h1.6v5.2h2v-5.2h1.6v-1.8h-1.7zm6.7 1.8c-.5-.4-1.2-.6-2-.6-1.1 0-1.8.5-1.8 1.2 0 1.6 3.6 1.1 3.6 3.2 0 1.2-1 2-2.7 2-1.1 0-2.2-.4-2.9-1.1l.9-1.4c.6.5 1.4.9 2.1.9.7 0 1.1-.3 1.1-.7 0-1.6-3.6-1.1-3.6-3.2 0-1.2 1-2 2.6-2 1 0 1.9.3 2.5.8l-.8 1.5z" fill="#FFFFFF" />
        </svg>
      );

    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <path d="M7.5 7.5v9h2v-5.8l6.3 7.6c.4-.2.8-.5 1.2-.8l-7.5-9h-2zm6.5 0h2v6.2l-2-2.4V7.5z" fill="#000000" />
        </svg>
      );

    case "tailwindcss":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6c-3.3 0-5.5 1.6-6.6 4.9 1.4-1.4 3-1.9 4.9-1.4 1.1.3 1.8 1.1 2.7 1.9C14.4 12.9 16.2 14.7 21 14.7c3.3 0 5.5-1.6 6.6-4.9-1.4 1.4-3 1.9-4.9 1.4-1.1-.3-1.8-1.1-2.7-1.9C18.6 7.8 16.8 6 12 6zm-9.9 8.7c-3.3 0-5.5 1.6-6.6 4.9 1.4-1.4 3-1.9 4.9-1.4 1.1.3 1.8 1.1 2.7 1.9C4.5 21.6 6.3 23.4 11.1 23.4c3.3 0 5.5-1.6 6.6-4.9-1.4 1.4-3 1.9-4.9 1.4-1.1-.3-1.8-1.1-2.7-1.9-1.4-1.5-3.2-3.3-8-3.3z" transform="scale(0.8) translate(2, -2)" fill="#06B6D4" />
        </svg>
      );

    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.8L2.7 7.2v10.6L12 23.2l9.3-5.4V7.2L12 1.8zm0 2.4l7.1 4.1v8.2L12 20.6l-7.1-4.1V8.3L12 4.2z" fill="#339933" />
        </svg>
      );

    case "express":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="monospace">
            ex
          </text>
        </svg>
      );

    case "postgresql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-4h-2V11h4v5.5zm1.5-7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="#4169E1" />
        </svg>
      );

    case "supabase":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.35 2.1a1 1 0 00-1.63-.03L1.58 15.3A1 1 0 002.39 17h8.26l-1 4.9a1 1 0 001.63.03l10.14-13.23A1 1 0 0020.61 7h-8.26l1-4.9z" fill="#3ECF8E" />
        </svg>
      );

    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.707 11.293l-9-9a.999.999 0 00-1.414 0l-9 9a.999.999 0 000 1.414l9 9c.39.39 1.024.39 1.414 0l9-9a.999.999 0 000-1.414zM12 18.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-4.59v-2.32c.7-.29 1.2-.98 1.2-1.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .81.5 1.5 1.2 1.79v2.32c-.7.29-1.2.98-1.2 1.79 0 .26.06.5.15.72L8.9 14.97c-.22.09-.46.15-.72.15-1.1 0-2-.9-2-2s.9-2 2-2c.81 0 1.5.5 1.79 1.2h2.32c.29-.7.98-1.2 1.79-1.2z" fill="#F05032" />
        </svg>
      );

    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "vscode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.15 2.587l-6.27-2.45a1.2 1.2 0 00-1.28.29L.61 14.57a.75.75 0 00.08 1.13l3.6 2.87a1.2 1.2 0 001.44-.06l9.88-8.81 1.94 1.48-11.83 10.5a.75.75 0 000 1.12l3.6 3.2a1.2 1.2 0 001.44.02l22.02-17.6a1.2 1.2 0 00.37-1.22l-1.5-4.613z" fill="#007ACC" />
        </svg>
      );

    case "google":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
      );

    case "gemini":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-gradient)" />
          <defs>
            <linearGradient id="gemini-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4E9FDF" />
              <stop offset="0.5" stopColor="#A46EDB" />
              <stop offset="1" stopColor="#E26A99" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "claude":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#D97757" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      );
  }
};