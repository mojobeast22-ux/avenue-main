"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Building,
  TrendingUp,
  Users,
  Hotel,
  Target,
  Zap,
  Shield,
  ClipboardList,
  Megaphone,
  PlusCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatWeDoPage() {
  const { t, language } = useLanguage();

  return (
    <div
      className="min-h-screen bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />
      <div className="h-1 md:h-5"></div>

      {/* Breadcrumb */}
      <div className="py-4 font-burdaBold">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-4xl">
            <Link
              href="/"
              className="text-black hover:text-[#9e1915] transition"
            >
              {t("what.breadcrumb.home")}
            </Link>
            <ChevronRight
              className={`w-4 h-4 text-gray-400 ${
                language === "ar" ? "rotate-180" : ""
              }`}
            />
            <span className="text-[#9e1915]">
              {t("what.breadcrumb.current")}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="font-snd relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/jadat baghdad/A-Pocket Park-Semi-Aerial View.jpg"
            alt="What We Do"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-black/60 p-6 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-burdaBold mb-6">
              {t("what.hero.title")}
            </h1>
            <p className="text-xl md:text-3xl font-burdaLight leading-relaxed">
              {t("what.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="font-snd container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
              {t("what.overview.badge")}
            </div>
            <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
              {t("what.overview.title")}
            </h2>
            <p className="text-xl md:text-3xl text-black max-w-3xl mx-auto font-burdaLight">
              {t("what.overview.subtitle")}
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#9e1915] to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-burdaBold text-[#9e1915] mb-4">
                  {t("what.service1")}
                </h3>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-burdaBold text-[#9e1915] mb-4">
                  {t("what.service2")}
                </h3>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-burdaBold text-[#9e1915] mb-4">
                  {t("what.service3")}
                </h3>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Hotel className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-burdaBold text-[#9e1915] mb-4">
                  {t("what.service4")}
                </h3>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-[#c53030] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Hotel className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-burdaBold text-[#9e1915] mb-4">
                  {t("what.service5")}
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="font-snd container mx-auto px-4 text-center">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
              {t("what.methodology.badge")}
            </div>
            <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
              {t("what.methodology.title")}
            </h2>
            <p className="text-black text-xl md:text-3xl max-w-3xl mx-auto font-burdaLight">
              {t("what.methodology.subtitle")}
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                icon: <Target className="w-6 h-6 text-white" />,
                title: t("what.step1.title"),
                desc: t("what.step1.desc"),
              },
              {
                num: "2",
                icon: <Zap className="w-6 h-6 text-white" />,
                title: t("what.step2.title"),
                desc: t("what.step2.desc"),
              },
              {
                num: "3",
                icon: <Building className="w-6 h-6 text-white" />,
                title: t("what.step3.title"),
                desc: t("what.step3.desc"),
              },
              {
                num: "4",
                icon: <Shield className="w-6 h-6 text-white" />,
                title: t("what.step4.title"),
                desc: t("what.step4.desc"),
              },
            ].map((step, i) => (
              <Card
                key={i}
                className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-burdaBold">
                    {step.num}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-xl flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-burdaBold text-[#9e1915] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-black text-2xl leading-relaxed font-burdaLight">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="font-snd container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-4">
              {t("what.detailed.title")}
            </h2>
            <p className="text-3xl text-black font-burdaLight max-w-3xl mx-auto">
              {t("what.detailed.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Group 1 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#2d5a87] rounded-2xl flex items-center justify-center">
                    <ClipboardList className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-burdaBold text-[#9e1915]">
                    {t("what.detail.group1")}
                  </h3>
                </div>

                <ul className="space-y-3 text-black text-2xl leading-relaxed font-burdaLight">
                  {[
                    "what.detail1.item1",
                    "what.detail1.item2",
                    "what.detail1.item3",
                    "what.detail1.item4",
                    "what.detail1.item5",
                    "what.detail1.item6",
                  ].map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Group 2 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e1915] to-[#c53030] rounded-2xl flex items-center justify-center">
                    <Megaphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-burdaBold text-[#9e1915]">
                    {t("what.detail.group2")}
                  </h3>
                </div>

                <ul className="space-y-3 text-black text-2xl leading-relaxed font-burdaLight">
                  {[
                    "what.detail2.item1",
                    "what.detail2.item2",
                    "what.detail2.item3",
                    "what.detail2.item4",
                    "what.detail2.item5",
                    "what.detail2.item6",
                    "what.detail2.item7",
                  ].map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Group 3 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2d5a87] to-[#9e1915] rounded-2xl flex items-center justify-center">
                    <PlusCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-burdaBold text-[#9e1915]">
                    {t("what.detail.group3")}
                  </h3>
                </div>

                <ul className="space-y-3 text-black text-2xl leading-relaxed font-burdaLight">
                  {[
                    "what.detail3.item1",
                    "what.detail3.item2",
                    "what.detail3.item3",
                    "what.detail3.item4",
                  ].map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
