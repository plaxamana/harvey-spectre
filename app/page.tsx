import HeroSection from "@/components/sections/HeroSection";
import IntroStatement from "@/components/sections/IntroStatement";
import AboutSection from "@/components/sections/AboutSection";
import PhotoSection from "@/components/sections/PhotoSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsSection from "@/components/sections/NewsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <IntroStatement />
        <AboutSection />
        <PhotoSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
