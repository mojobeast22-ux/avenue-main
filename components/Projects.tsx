"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("project1.title"),
      category: t("project1.category"),
      location: t("project1.location"),
      status: t("project1.status"),
      area: t("project1.area"),
      units: t("project1.units"),
      image: "/jadat baghdad/z7.jpg",
      description: t("project1.description"),
      features: [
        t("project1.feature1"),
        t("project1.feature2"),
        t("project1.feature3"),
        t("project1.feature4"),
        t("project1.feature5"),
      ],
    },
    {
      title: t("project2.title"),
      category: t("project2.category"),
      location: t("project2.location"),
      status: t("project2.status"),
      area: t("project2.area"),
      units: t("project2.units"),
      image: "/OCR/ocr1.jpeg",
      description: t("project2.description"),
      features: [
        t("project2.feature1"),
        t("project2.feature2"),
        t("project2.feature3"),
        t("project2.feature4"),
      ],
    },
    {
      title: t("project3.title"),
      category: t("project3.category"),
      location: t("project3.location"),
      status: t("project3.status"),
      area: t("project3.area"),
      units: t("project3.units"),
      image: "/bloom1/1000...a1.png",
      description: t("project3.description"),
      features: [
        t("project3.feature1"),
        t("project3.feature2"),
        t("project3.feature3"),
        t("project3.feature4"),
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#faf8f7]">
      <div className="container max-w-7xl mx-auto px-4 font-snd">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center rounded-full border border-[#9e1915]/15 bg-white px-5 py-2 text-[#9e1915] text-base md:text-lg shadow-sm font-burdaBold mb-6">
            {t("projects.breadcrumb.current")}
          </div>

          <h2 className="text-4xl md:text-6xl xl:text-7xl font-burdaBold text-gray-900 mb-6 leading-[1.1]">
            {t("projects.title")}
          </h2>

          <p className="text-lg md:text-2xl xl:text-3xl font-burdaLight text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white border border-black/5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[28px] hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                <div className="absolute top-4 right-4 flex gap-2 z-10 flex-wrap">
                  <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-burdaMedium backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 right-0 px-5 z-10">
                  <h3 className="text-3xl md:text-4xl font-burdaBold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm md:text-base text-white/90 font-burdaMedium">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 md:p-7">
                <p className="text-gray-600 font-burdaLight mb-5 text-base md:text-lg leading-8 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="rounded-full border border-[#9e1915]/15 bg-[#9e1915]/5 px-3 py-1.5 text-sm text-[#9e1915] font-burdaMedium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="/projects">
            <Button className="bg-[#9e1915] hover:bg-[#8b1411] text-white px-8 md:px-10 py-3 rounded-full text-lg md:text-xl shadow-[0_14px_30px_rgba(158,25,21,0.18)] transition-all duration-300 hover:-translate-y-0.5">
              {t("projects.button.all")}
              <ArrowLeft className="w-5 h-5 mr-3" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;