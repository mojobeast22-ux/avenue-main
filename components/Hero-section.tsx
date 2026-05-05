"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowLeft, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState("");
  const { t, isRTL } = useLanguage();

  const heroSlides = [
    {
      videoCover: "/Draft Animation2.mp4",
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle"),
      description: t("hero.slide1.description"),
      buttonText: t("hero.slide1.button"),
      videoText: t("hero.slide1.videoText"),
      pageLink: "/about",
      videoLink: "https://youtu.be/4jUqs7JOCSI?si=dePf0aNix6cMWjcU",
    },
    {
      videoCover: "/Draft Animation2.mp4",
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle"),
      description: t("hero.slide2.description"),
      buttonText: t("hero.slide2.button"),
      videoText: t("hero.slide2.videoText"),
      pageLink: "/about",
      videoLink: "https://youtu.be/qSuv7PIq_2I?si=C81S0FRbTT8ScDZ1",
    },
    {
      videoCover: "/Draft Animation2.mp4",
      title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle"),
      description: t("hero.slide3.description"),
      buttonText: t("hero.slide3.button"),
      videoText: t("hero.slide3.videoText"),
      pageLink: "/projects",
      videoLink: "https://youtu.be/lhPS0pN3daU?si=KsVqkBUrMDUMBJk5",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  const openVideo = (link) => {
    const embedLink = link
      .replace("https://youtu.be/", "https://www.youtube.com/embed/")
      .split("?")[0];
    setCurrentVideoLink(embedLink);
    setIsVideoOpen(true);
  };

  return (
    <section className="relative h-screen overflow-hidden font-burdaBold">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ${
            idx === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <video
            src={slide.videoCover}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Text and buttons overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-8">
            <div className="max-w-2xl sm:max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-burdaBold text-white mb-4 sm:mb-6 leading-snug">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-5xl text-[#9e1915] font-burdaMedium mb-3">
                {slide.subtitle}
              </h2>
              <p className="text-xl md:text-4xl text-gray-200 font-burdaLight mb-5 sm:mb-6 leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href={slide.pageLink} passHref>
                  <Button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#9e1915] px-6 sm:px-8 py-3 sm:py-4 text-white transition-all duration-300 ease-in-out hover:bg-[#e0423d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9e1915] text-xl">
                    <span className="relative z-10 flex items-center">
                      {slide.buttonText}
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="hidden lg:inline-flex group relative items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white hover:text-[#9e1915] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-xl"
                  onClick={() => openVideo(slide.videoLink)}
                >
                  <span className="relative z-10 flex items-center">
                    {slide.videoText}
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex items-center justify-center absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg transition-all duration-300 ease-in-out"
        onClick={prevSlide}
        aria-label={t("hero.prev")}
      >
        <ChevronLeft className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex items-center justify-center absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg transition-all duration-300 ease-in-out"
        onClick={nextSlide}
        aria-label={t("hero.next")}
      >
        <ChevronRight className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" />
      </Button>

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-lg sm:max-w-3xl bg-black rounded-lg p-4">
            <button
              className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors duration-300"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={currentVideoLink}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
