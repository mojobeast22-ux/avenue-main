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
    <section className="py-14 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 font-snd">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
            {t("projects.breadcrumb.current")}
          </div>

          <h2 className="text-4xl md:text-6xl font-burdaBold text-gray-900 mb-4">
            {t("projects.title")}
          </h2>

          <p className="text-lg md:text-3xl font-burdaLight text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition duration-500 rounded-2xl"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <div className="bg-[#9e1915] text-white px-3 py-1 rounded-full text-md font-burdaMedium">
                    {project.category}
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-md font-burdaMedium ${
                      project.status === t("project1.status")
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-3xl font-burdaBold mb-2 text-gray-900">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mb-3 text-lg text-gray-500 font-burdaBold">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>

                <p className="text-gray-600 font-burdaLight mb-4 text-lg md:text-2xl">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a href="/projects">
            <Button className="bg-[#9e1915] hover:bg-[#e8251e] text-white px-8 py-3 rounded-full text-xl">
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
