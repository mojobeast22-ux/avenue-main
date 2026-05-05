"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Eye,
  Target,
  Shield,
  Star,
  Heart,
  TrendingUp,
  Users,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <div className="h-1 md:h-5" />

      {/* Breadcrumb */}
      <div className="py-4 font-burdaBold">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-4xl">
            <Link
              href="/"
              className="text-black hover:text-[#9e1915] transition"
            >
              {t("about.breadcrumb.home")}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-[#9e1915]">
              {t("about.breadcrumb.about")}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] bg-transparent overflow-hidden">
        <Image
          src="/bloom1/1...200 final (1).png"
          alt="عن أفينيو"
          fill
          className="object-cover absolute inset-0"
        />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white bg-black/60 p-6 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-burdaBold mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl md:text-3xl font-burdaLight leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
                {t("about.story.tag")}
              </div>

              <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
                {t("about.story.title")}
              </h2>

              <p className="text-xl md:text-3xl text-black font-burdaLight mb-6 leading-relaxed">
                {t("about.story.p1")}
              </p>

              <p className="text-xl md:text-3xl text-black font-burdaLight mb-8 leading-relaxed">
                {t("about.story.p2")}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-burdaBold text-[#9e1915] mb-2">
                    2019
                  </div>
                  <div className="text-black font-burdaMedium text-2xl">
                    {t("about.story.year")}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-burdaBold text-[#9e1915] mb-2">
                    +10
                  </div>
                  <div className="text-black font-burdaMedium text-2xl">
                    {t("about.story.projects")}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto">
              <Image
                src="https://i.pinimg.com/736x/07/9e/24/079e24438b5dc87aece9ac2f109adbbe.jpg"
                alt="Avenue Projects"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-[#9e1915] text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-burdaBold mb-3">
                  {t("about.story.box.title")}
                </div>
                <div className="text-lg font-burdaMedium">
                  {t("about.story.box.desc")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 font-snd">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
              {t("about.vm.tag")}
            </div>

            <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
              {t("about.vm.title")}
            </h2>

            <p className="text-xl md:text-3xl font-burdaLight text-black max-w-3xl mx-auto">
              {t("about.vm.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#9e1915] rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-5xl font-burdaBold text-[#9e1915] mb-4">
                  {t("about.vision.title")}
                </h3>
                <p className="text-black font-burdaLight text-xl md:text-3xl leading-relaxed">
                  {t("about.vision.desc")}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#9e1915] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-5xl font-burdaBold text-[#9e1915] mb-4">
                  {t("about.mission.title")}
                </h3>
                <p className="text-black font-burdaLight text-xl md:text-3xl leading-relaxed">
                  {t("about.mission.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 font-snd">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
              {t("about.values.tag")}
            </div>

            <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
              {t("about.values.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield />,
                title: t("about.values.item1"),
                desc: t("about.values.item1.desc"),
              },
              {
                icon: <Star />,
                title: t("about.values.item2"),
                desc: t("about.values.item2.desc"),
              },
              {
                icon: <Heart />,
                title: t("about.values.item3"),
                desc: t("about.values.item3.desc"),
              },
              {
                icon: <TrendingUp />,
                title: t("about.values.item4"),
                desc: t("about.values.item4.desc"),
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#9e1915] to-gray-800 rounded-2xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-burdaBold text-[#9e1915] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black font-burdaLight text-xl md:text-2xl">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 font-snd">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
              {t("about.leaders.tag")}
            </div>

            <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
              {t("about.leaders.title")}
            </h2>

            <p className="text-xl md:text-3xl font-burdaLight text-black max-w-3xl mx-auto">
              {t("about.leaders.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Chairman */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <Image
                  src="/pre1.png"
                  alt={t("about.leaders.ceo.title")}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover mb-6"
                />

                <p className="text-[#9e1915] font-burdaMedium mb-4 text-xl md:text-3xl">
                  {t("about.leaders.ceo.title")}
                </p>

                <p className="text-black font-burdaLight text-xl md:text-2xl leading-7">
                  {t("about.leaders.ceo.desc")}
                </p>
              </CardContent>
            </Card>

            {/* Vice Chairman */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <Image
                  src="/pre2.png"
                  alt={t("about.leaders.vp.title")}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover mb-6"
                />

                <p className="text-[#9e1915] font-burdaMedium mb-4 text-xl md:text-3xl">
                  {t("about.leaders.vp.title")}
                </p>

                <p className="text-black font-burdaLight text-xl md:text-2xl leading-7">
                  {t("about.leaders.vp.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-[#9e1915] to-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 font-snd text-center">
          <h2 className="text-3xl md:text-5xl font-burdaBold mb-6">
            {t("about.cta.title")}
          </h2>

          <p className="text-xl md:text-3xl font-burdaLight mb-10 max-w-3xl mx-auto">
            {t("about.cta.subtitle")}
          </p>

          <Link href="/contact">
            <Button className="bg-white text-[#9e1915] hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
              {t("about.cta.button")}
              <MapPin className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
