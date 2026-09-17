import { HeroSection } from "@/src/components/hero/HeroSection";
import { AboutSection } from "@/src/components/about/AboutSection";
import { WhatIDoSection } from "@/src/components/whatido/WhatIDoSection";
import { StackSection } from "@/src/components/stack/StackSection";
import { JourneySection } from "@/src/components/journey/JourneySection";
import { ContactSection } from "@/src/components/contact/ContactSection";

export default function Home() {
  return (
      <>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <StackSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
