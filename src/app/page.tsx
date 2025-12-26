import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import GalleryShowcase from "@/components/sections/GalleryShowcase";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <GalleryShowcase />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
