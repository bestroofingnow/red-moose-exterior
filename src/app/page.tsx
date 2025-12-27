import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import GalleryShowcase from "@/components/sections/GalleryShowcase";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SectionDivider />
      <Benefits />
      <SectionDivider />
      <GalleryShowcase />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <Testimonials />
      <CTA />
    </>
  );
}
