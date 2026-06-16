"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  Award,
  Users,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import clsx from "clsx";

const About = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      title: t("about.feature1.title"),
      desc: t("about.feature1.desc"),
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      title: t("about.feature2.title"),
      desc: t("about.feature2.desc"),
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: t("about.feature3.title"),
      desc: t("about.feature3.desc"),
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: t("about.feature4.title"),
      desc: t("about.feature4.desc"),
      icon: <Star className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf8f7] py-20 md:py-28 font-snd">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#9e1915]/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-20">
          <div className="inline-flex items-center rounded-full border border-[#9e1915]/15 bg-white px-5 py-2 text-[#9e1915] text-base md:text-lg shadow-sm font-burdaBold mb-6">
            {t("about.sectionTag")}
          </div>

          <h2 className="text-4xl md:text-6xl xl:text-7xl text-gray-900 font-burdaBold leading-[1.1] tracking-tight">
            {t("about.title1")}
            <span className="block text-[#9e1915] mt-3">{t("about.title2")}</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Image block */}
          <div className="relative order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#9e1915]/8 blur-2xl opacity-80" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

              <Image
                src="/aboutsection.jpg"
                alt="Avenue Real Estate"
                width={1000}
                height={760}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                priority
              />

              {/* Floating mini card */}
              <div
                className={clsx(
                  "absolute bottom-5 z-20 rounded-2xl border border-white/15 bg-black/45 px-5 py-4 backdrop-blur-md text-white shadow-lg",
                  isRTL ? "right-5 text-right" : "left-5 text-left"
                )}
              >
                <p className="text-sm md:text-base text-white/80 font-burdaLight">
                  {t("about.sectionTag")}
                </p>
                <p className="text-lg md:text-2xl font-burdaBold mt-1">
                  {t("about.title1")}
                </p>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div
            className={clsx(
              "order-2",
              isRTL ? "text-right" : "text-left"
            )}
          >
            <p className="text-lg md:text-2xl xl:text-3xl text-gray-600 leading-relaxed font-burdaLight mb-6">
              {t("about.p1")}
            </p>

            <p className="text-lg md:text-2xl xl:text-3xl text-gray-600 leading-relaxed font-burdaLight mb-10">
              {t("about.p2")}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-black/6 bg-white/90 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={clsx(
                      "flex items-start gap-4",
                      isRTL ? "flex-row-reverse text-right" : "text-left"
                    )}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#9e1915] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-burdaBold text-gray-900 mb-1 group-hover:text-[#9e1915] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed font-burdaLight">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={clsx(
                "flex flex-col sm:flex-row gap-4",
                isRTL ? "sm:justify-start" : "sm:justify-start"
              )}
            >
              <Link href="/about">
                <Button className="h-13 rounded-full bg-[#9e1915] px-8 text-white text-base md:text-lg shadow-[0_14px_30px_rgba(158,25,21,0.2)] hover:bg-[#8b1411] hover:translate-y-[-1px] transition-all duration-300">
                  {t("about.button.more")}
                  <ArrowUpRight className="w-4 h-4 ms-2" />
                </Button>
              </Link>

              <a href="/AVENUE Real Estate.pdf" download>
                <Button
                  variant="outline"
                  className="h-13 rounded-full border-[#9e1915]/30 bg-white px-8 text-[#9e1915] text-base md:text-lg hover:bg-[#9e1915] hover:text-white transition-all duration-300"
                >
                  {t("about.button.download")}
                  <ArrowLeft className="w-4 h-4 ms-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;