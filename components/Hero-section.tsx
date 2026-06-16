"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import clsx from "clsx";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState("");
  const { t, isRTL, language } = useLanguage();

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
    }, 6500);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const openVideo = (link: string) => {
    const embedLink = link
      .replace("https://youtu.be/", "https://www.youtube.com/embed/")
      .split("?")[0];
    setCurrentVideoLink(embedLink);
    setIsVideoOpen(true);
  };

  const stats = [
    {
      ar: "مشاريع نوعية",
      en: "Signature Projects",
      value: "03+",
    },
    {
      ar: "سنوات خبرة",
      en: "Years of Experience",
      value: "2019",
    },
    {
      ar: "موقع استراتيجي",
      en: "Strategic Presence",
      value: "IQ",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden font-burdaBold">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={clsx(
            "absolute inset-0 transition-all duration-1000 ease-out",
            idx === currentSlide
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0 pointer-events-none"
          )}
        >
          {/* Background Video */}
          <video
            src={slide.videoCover}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(158,25,21,0.28),transparent_40%)]" />

          {/* Main Content */}
          <div className="relative z-20 container mx-auto flex min-h-screen items-center px-4 pt-16 pb-28 md:px-6">
            <div
              className={clsx(
                "w-full max-w-4xl",
                isRTL ? "mr-0 lg:mr-4 text-center lg:text-right" : "text-center lg:text-left"
              )}
            >
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm md:text-base text-white/90 backdrop-blur-md shadow-sm mb-6">
                <span className="h-2 w-2 rounded-full bg-[#9e1915] me-2" />
                {slide.subtitle}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl leading-[1.05] text-white mb-6 font-burdaBold tracking-tight">
                {slide.title}
              </h1>

              <p className="mx-auto lg:mx-0 max-w-3xl text-lg sm:text-xl md:text-3xl text-white/85 font-burdaLight leading-relaxed mb-10">
                {slide.description}
              </p>

              <div
                className={clsx(
                  "flex flex-col sm:flex-row gap-4",
                  isRTL ? "justify-center lg:justify-start" : "justify-center lg:justify-start"
                )}
              >
                <Link href={slide.pageLink}>
                  <Button className="h-14 px-8 rounded-full bg-[#9e1915] text-white text-base md:text-lg shadow-[0_15px_35px_rgba(158,25,21,0.3)] hover:bg-[#8c1512] hover:translate-y-[-1px] transition-all duration-300">
                    {slide.buttonText}
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  onClick={() => openVideo(slide.videoLink)}
                  className="h-14 px-8 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-md text-base md:text-lg hover:bg-white hover:text-[#9e1915] transition-all duration-300"
                >
                  <Play className="w-4 h-4 me-2 fill-current" />
                  {slide.videoText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Controls */}
      <div className="absolute inset-x-0 bottom-28 z-30 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#9e1915] transition-all"
                onClick={prevSlide}
                aria-label={t("hero.prev")}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#9e1915] transition-all"
                onClick={nextSlide}
                aria-label={t("hero.next")}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={clsx(
                    "transition-all duration-300 rounded-full",
                    index === currentSlide
                      ? "w-10 h-2 bg-[#9e1915]"
                      : "w-2 h-2 bg-white/60 hover:bg-white"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-t-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5 md:border-b-0 md:border-l md:border-white/10 last:border-l-0"
              >
                <div className="text-white/85">
                  <p className="text-sm md:text-base font-burdaLight">
                    {language === "ar" ? item.ar : item.en}
                  </p>
                </div>
                <div className="text-2xl md:text-3xl text-white font-burdaBold">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-black p-3 shadow-2xl">
            <button
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#9e1915] transition-all"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-hidden rounded-2xl">
              <div className="aspect-video">
                <iframe
                  src={currentVideoLink}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;