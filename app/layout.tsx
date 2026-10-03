import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { MobileNav } from '@/src/components/layout/MobileNav';
import { Navbar } from '@/src/components/layout/Navbar';
import {Footer}  from  '@/src/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase : new URL("https://jobexe.vercel.app/") , 

  title: 'Emmanuel Job — Full-Stack Developer',
  description: 'I’m Emmanuel Job, a Computer Science student at Obafemi Awolowo University and a full-stack developer who enjoys turning ideas into real products. I build modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and Supabase, combining problem solving, responsive design, and thoughtful user experiences to create products that are both functional and enjoyable to use.',

  openGraph : {
    title: 'Emmanuel Job — Full-Stack Developer',
    description: 'I’m Emmanuel Job, a Computer Science student at Obafemi Awolowo University and a full-stack developer who enjoys turning ideas into real products. I build modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and Supabase, combining problem solving, responsive design, and thoughtful user experiences to create products that are both functional and enjoyable to use.',
    type : 'website' ,
    siteName : 'Emmanuel Job portfolio'

  } , 

  twitter: {
    card: 'summary_large_image',
    title: "Emmanuel Job — Full-Stack Developer",
    description: 'I’m Emmanuel Job, a Computer Science student at Obafemi Awolowo University and a full-stack developer who enjoys turning ideas into real products. I build modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and Supabase, combining problem solving, responsive design, and thoughtful user experiences to create products that are both functional and enjoyable to use.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} `}>
      <body>
        <MobileNav />
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}