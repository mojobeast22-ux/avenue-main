"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Star,
  Award,
  Users,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

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
    <section className="min-h-screen bg-gray-50 py-14 md:py-20 font-snd">
      <div className="container max-w-6xl mx-auto px-4">
        {/* IMAGE CENTERED AT TOP */}
        <div className="flex justify-center mb-12">
          <div className="relative group w-full max-w-3xl">
            <div className="absolute -inset-4 bg-[#9e1915]/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-white">
              <Image
                src="/aboutsection.jpg"
                alt="Avenue Real Estate"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* TEXT CONTENT UNDER IMAGE */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block bg-gray-100 text-[#9e1915] px-5 py-2 rounded-full text-4xl font-burdaBold mb-6">
            {t("about.sectionTag")}
          </span>

          <h2 className="text-3xl md:text-5xl font-burdaBold text-gray-900 leading-snug mb-6">
            {t("about.title1")}
            <span className="block text-[#9e1915] mt-2">
              {t("about.title2")}
            </span>
          </h2>

          <p className="text-xl md:text-3xl text-gray-600 leading-relaxed mb-5 font-burdaLight">
            {t("about.p1")}
          </p>

          <p className="text-xl md:text-3xl text-gray-600 leading-relaxed mb-12 font-burdaLight">
            {t("about.p2")}
          </p>
        </div>

        {/* FEATURES UNDER TEXT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-white border border-gray-200 hover:border-[#9e1915]/30 hover:bg-[#9e1915]/5 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-[#9e1915] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#9e1915] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS AT THE END */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center ">
          <a href="/about">
            <Button className="bg-[#9e1915] hover:bg-[#cd3c37] text-white px-10 py-3 rounded-full flex items-center font-burdaBold text-xl">
              <ArrowLeft className="w-5 h-5 mr-1" />
              {t("about.button.more")}
            </Button>
          </a>

          <a href="/AVENUE Real Estate.pdf" download>
            <Button
              variant="outline"
              className="border-2 border-[#9e1915] text-[#9e1915] hover:bg-[#9e1915] hover:text-white px-10 py-3 rounded-full font-burdaBold text-xl"
            >
              {t("about.button.download")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
