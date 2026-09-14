import { HeroSection } from "@/src/components/hero/HeroSection";
import { AboutSection } from "@/src/components/about/AboutSection";
import { WhatIDoSection } from "@/src/components/whatido/WhatIDoSection";
import { StackSection } from "@/src/components/stack/StackSection";

export default function Home() {
  return (
      <>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <StackSection />
    </>
  );
}
