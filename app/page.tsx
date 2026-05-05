"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero-section";
import About from "@/components/About-us";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA-section";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t, isRTL } = useLanguage();
  return (
    <div className=" bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
}
