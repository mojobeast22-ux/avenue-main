"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, MapPin, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  const allProjects = [
    {
      id: 1,
      slug: "jadatbaghdad",
      title: t("projects.list.1.title"),
      type: t("projects.list.1.type"),
      location: t("projects.list.1.location"),
      image: "/jadat baghdad/z7.jpg",
      status: t("projects.list.status.available"),
      priceFrom: "1,500,000",
      bedrooms: "1-4",
      description: t("projects.list.1.desc"),
    },
    {
      id: 2,
      slug: "ocr",
      title: t("projects.list.2.title"),
      type: t("projects.list.2.type"),
      location: t("projects.list.2.location"),
      image: "/OCR/ocr1.jpeg",
      status: t("projects.list.status.available"),
      priceFrom: "950,000",
      bedrooms: "1-3",
      description: t("projects.list.2.desc"),
    },
    {
      id: 3,
      slug: "bloomvillage",
      title: t("projects.list.3.title"),
      type: t("projects.list.3.type"),
      location: t("projects.list.3.location"),
      image: "/bloom1/1000...a1.png",
      status: t("projects.list.status.available"),
      priceFrom: "1,800,000",
      bedrooms: null,
      description: t("projects.list.3.desc"),
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />

      <div className="h-1 md:h-5"></div>

      {/* Breadcrumb */}
      <div className="font-burdaBold py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-4xl">
            <Link
              href="/"
              className="text-black hover:text-[#9e1915] transition"
            >
              {t("projects.breadcrumb.home")}
            </Link>

            <ChevronRight
              className={`w-4 h-4 text-gray-400 ${
                language === "ar" ? "rotate-180" : ""
              }`}
            />

            <span className="text-[#9e1915]">
              {t("projects.breadcrumb.current")}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bloom1/300.....final 1.png"
            alt={t("projects.hero.alt")}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-black/60 p-6 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-burdaBold mb-6">
              {t("projects.hero.title")}
            </h1>
            <p className="text-xl md:text-3xl font-burdaLight leading-relaxed">
              {t("projects.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-gray-50">
        <div className="font-snd container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-burdaBold text-black mb-4">
              {t("projects.all.title")}
            </h2>
            <div className="w-20 h-1 bg-[#9e1915]"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-3xl font-burdaBold mb-1">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1 text-lg opacity-90 font-burdaMedium">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-lg font-burdaBold text-gray-600">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{project.type}</span>
                    </div>
                  </div>

                  <p className="text-black font-burdaLight mb-6 leading-relaxed line-clamp-2 text-xl md:text-2xl">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <Link href={`/projects/${project.slug}`}>
                      <Button className="bg-[#9e1915] hover:bg-[#9e1915] text-white">
                        {t("projects.all.button")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-[#9e1915] to-slate-900 text-white relative overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-burdaBold mb-6">
            {t("projects.cta.title")}
          </h2>

          <p className="text-xl md:text-3xl font-burdaLight mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            {t("projects.cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button className="bg-white text-[#9e1915] hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
                {t("projects.cta.button")}
                <MapPin className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
