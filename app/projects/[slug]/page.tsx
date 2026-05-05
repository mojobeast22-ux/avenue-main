"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  MapPin,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getProjectData = (slug: string, t: any) => {
  const projects: Record<string, any> = {
    jadatbaghdad: {
      id: 1,
      slug: "jadatbaghdad",
      title: t("projects.details.jadatbaghdad.title"),
      type: t("projects.details.jadatbaghdad.type"),
      location: t("projects.details.jadatbaghdad.location"),
      mainImage: "/jadat baghdad/A-Pocket Park-Semi-Aerial View.jpg",
      status: t("projects.details.jadatbaghdad.status"),
      statusColor: "bg-green-500",
      description: t("projects.details.jadatbaghdad.description"),
      longDescription: [
        t("projects.details.jadatbaghdad.longDescription.1"),
        t("projects.details.jadatbaghdad.longDescription.2"),
        t("projects.details.jadatbaghdad.longDescription.3"),
      ],
      features: [
        t("projects.details.jadatbaghdad.feature.1"),
        t("projects.details.jadatbaghdad.feature.2"),
        t("projects.details.jadatbaghdad.feature.3"),
        t("projects.details.jadatbaghdad.feature.4"),
        t("projects.details.jadatbaghdad.feature.5"),
        t("projects.details.jadatbaghdad.feature.6"),
      ],
      gallery: [
        "/jadat baghdad/C-Avenue Semi-Aerial View.jpg",
        "/jadat baghdad/D-Avenue Aerial View.jpg",
        "/jadat baghdad/Northern Extension Park-Aerial View.jpg",
        "/jadat baghdad/z6.jpg",
        "/jadat baghdad/z7.jpg",
        "/jadat baghdad/A-Pocket Park-Semi-Aerial View.jpg",
      ],
    },

    ocr: {
      id: 2,
      slug: "ocr",
      title: t("projects.details.ocr.title"),
      type: t("projects.details.ocr.type"),
      location: t("projects.details.ocr.location"),
      mainImage: "/OCR/YCA_Al'Ok_Showroom_C1.jpg",
      status: t("projects.details.ocr.status"),
      statusColor: "bg-green-500",
      description: t("projects.details.ocr.description"),
      longDescription: [
        t("projects.details.ocr.longDescription.1"),
        t("projects.details.ocr.longDescription.2"),
      ],
      features: [
        t("projects.details.ocr.feature.1"),
        t("projects.details.ocr.feature.2"),
        t("projects.details.ocr.feature.3"),
        t("projects.details.ocr.feature.4"),
        t("projects.details.ocr.feature.5"),
      ],
      gallery: [
        "/OCR/YCA_Al'Ok_Showroom_C1.jpg",
        "/OCR/ocr1.jpeg",
        "/OCR/WhatsApp Image 2025-04-16 at 13.00.58 (4).jpeg",
        "/OCR/WhatsApp Image 2025-04-16 at 13.00.58 (7).jpeg",
        "/OCR/WhatsApp Image 2025-04-16 at 13.01.02 (1).jpeg",
        "/OCR/WhatsApp Image 2025-04-16 at 13.01.02 (2).jpeg",
        "/OCR/YCA_Al'Ok_Showroom_C4.jpg",
      ],
    },

    bloomvillage: {
      id: 3,
      slug: "bloomvillage",
      title: t("projects.details.bloomvillage.title"),
      type: t("projects.details.bloomvillage.type"),
      location: t("projects.details.bloomvillage.location"),
      mainImage: "/bloom1/1...200 final (1).png",
      status: t("projects.details.bloomvillage.status"),
      statusColor: "bg-green-500",
      description: t("projects.details.bloomvillage.description"),
      longDescription: [
        t("projects.details.bloomvillage.longDescription.1"),
        t("projects.details.bloomvillage.longDescription.2"),
      ],
      features: [
        t("projects.details.bloomvillage.feature.1"),
        t("projects.details.bloomvillage.feature.2"),
        t("projects.details.bloomvillage.feature.3"),
        t("projects.details.bloomvillage.feature.4"),
        t("projects.details.bloomvillage.feature.5"),
      ],
      gallery: [
        "/bloom1/1.jpg",
        "/bloom1/1...200 final (1).png",
        "/bloom1/1000...a1.png",
        "/bloom1/250...1....FINAL.png",
        "/bloom1/300.....final 1.png",
        "/bloom1/FINAL GATE...1.png",
        "/bloom1/800....1 (1).png",
        "/bloom1/Image.png",
      ],
    },
  };

  return projects[slug];
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;

  const { t, isRTL } = useLanguage();
  const project = getProjectData(slug, t);

  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      <div className="h-1 md:h-5"></div>

      {/* Breadcrumb */}
      <div className="py-4 font-burdaBold">
        <div className="ؤontainer mx-auto px-4">
          <nav className="flex items-center gap-2 text-4xl">
            <Link
              href="/"
              className="text-black hover:text-[#9e1915] transition"
            >
              {t("projects.breadcrumb.home")}
            </Link>
            <ChevronRight className="w-4 h-4 text-black rotate-180" />
            <Link
              href="/projects"
              className="text-black hover:text-[#9e1915] transition-colors"
            >
              {t("projects.breadcrumb.current")}
            </Link>
            <ChevronRight className="w-4 h-4 text-black rotate-180" />
            <span className="text-[#9e1915]">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="font-snd relative h-[80vh] bg-gradient-to-r from-[#1a365d] to-[#2d5a87] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-black/60 p-6 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-burdaBold mb-6">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-2xl opacity-90 font-burdaMedium">
                {project.location}
              </span>
            </div>
            <p className="text-xl md:text-3xl leading-relaxed opacity-90 mb-8 font-burdaLight">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white">
        {/* Project Overview */}
        <section className="py-16">
          <div className="font-snd container mx-auto px-10">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-3 mx-auto">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-burdaBold text-black mb-6">
                    {t("projects.overview")}
                  </h2>
                  <div className="space-y-4">
                    {project.longDescription &&
                      project.longDescription.map(
                        (paragraph: string, index: number) => (
                          <p
                            key={index}
                            className="text-xl md:text-2xl text-gblack leading-relaxed font-burdaMedium"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-burdaBold text-black mb-6">
                    {t("projects.features")}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features &&
                      project.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#e53e3e]" />
                          <span className="text-black font-burdaMedium text-2xl">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Only Section */}
        <section className="py-20">
          <div className="font-snd container mx-auto px-4">
            <div className="w-full">
              <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-burdaBold text-black mb-6 text-center">
                  {t("projects.pic")}
                </h2>
                <p className="text-xl md:text-4xl text-black max-w-3xl mx-auto text-center mb-8 font-burdaLight">
                  {t("projects.pic1")} {project.title}
                </p>
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <>
                  <div className="relative mb-6">
                    <div className="relative h-[60vh] overflow-hidden rounded-xl">
                      <Image
                        src={project.gallery[activeGalleryImage]}
                        alt={`${project.title} - صورة ${
                          activeGalleryImage + 1
                        }`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12"
                      onClick={() =>
                        setActiveGalleryImage((prev) =>
                          prev === 0 ? project.gallery.length - 1 : prev - 1
                        )
                      }
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12"
                      onClick={() =>
                        setActiveGalleryImage((prev) =>
                          prev === project.gallery.length - 1 ? 0 : prev + 1
                        )
                      }
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-6 gap-4">
                    {project.gallery.map((image: string, index: number) => (
                      <div
                        key={index}
                        className={`relative h-24 overflow-hidden rounded-lg cursor-pointer ${
                          activeGalleryImage === index
                            ? "ring-4 ring-[#e53e3e]"
                            : ""
                        }`}
                        onClick={() => setActiveGalleryImage(index)}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - صورة مصغرة ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* بروشورات المشروع */}
        {slug === "bloomvillage" && (
          <section className="py-20 bg-gray-50">
            <div className="font-snd container mx-auto px-6 md:px-10">
              <h2 className="text-3xl md:text-5xl font-burdaBold text-black mb-10 text-center">
                {t("projects.bloom")}
              </h2>
              <p className="text-xl md:text-3xl text-black max-w-3xl mx-auto text-center mb-8 font-burdaLight">
                {t("projects.bloom2")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <Image
                    src="/bloom master plan/br1.png"
                    alt="بروشور بلوم فيلج - 1"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover mb-6"
                  />
                  <h3 className="text-2xl font-burdaBold text-black mb-3">
                    {t("projects.bloom.brouchure")}
                  </h3>
                  <a
                    href="/bloom master plan/Bloom B-.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-[#9e1915] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#b81e1a] transition-all"
                  >
                    {t("projects.bloom.brouchure3")}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <Image
                    src="/bloom master plan/br2.png"
                    alt="بروشور بلوم فيلج - 2"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover mb-6"
                  />
                  <h3 className="text-2xl font-burdaBold text-black mb-3">
                    {t("projects.bloom.brouchure2")}
                  </h3>
                  <a
                    href="/bloom master plan/bloom profile.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-[#9e1915] transition-all"
                  >
                    {t("projects.bloom.brouchure3")}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/*قسم مخطط المشروع */}
        {slug === "bloomvillage" && (
          <section className="py-20 bg-white">
            <div className="font-snd container mx-auto px-6 md:px-10">
              <h2 className="text-3xl md:text-5xl font-burdaBold text-black mb-10 text-center">
                <span className="text-[#9e1915]">
                  {" "}
                  {t("projects.bloom.brouchure4")}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "/bloom master plan/EYEBIRD VIEW (2).jpg",
                  "/bloom master plan/EYEBIRD VIEW (3).png",
                  "/bloom master plan/EYEBIRD VIEW (4).png",
                ].map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all group"
                  >
                    <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`Bloom Village Master Plan ${index + 1}`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg md:text-xl bg-black/40 px-4 py-2 rounded-md">
                        اضغط لفتح الصورة كاملة
                      </span>
                    </div>

                    <a
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                      aria-label={`فتح صورة مخطط المشروع ${
                        index + 1
                      } في نافذة جديدة`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
