import { HeroSection } from "@/components/sections/HeroSection";
import { LogoBar } from "@/components/sections/LogoBar";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <ServiceCards />
      <TechShowcase />
      <Stats />
      <HowWeWork />
      <CaseStudyPreview />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
