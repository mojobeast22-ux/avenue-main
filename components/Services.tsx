"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.item1"),
      image: "/1.png",
    },
    {
      title: t("services.item2"),
      image: "/2.png",
    },
    {
      title: t("services.item3"),
      image: "/3.png",
    },
    {
      title: t("services.item4"),
      image: "/4.png",
    },
  ];

  return (
    <section className="md:py-14 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 font-snd">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
            {t("services.sectionTag")}
          </div>

          <h2 className="text-4xl md:text-6xl font-burdaBold text-gray-900 mb-4">
            {t("services.title")}
          </h2>

          <p className="text-lg md:text-3xl text-gray-600 font-burdaLight max-w-3xl mx-auto leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <div className="relative w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
