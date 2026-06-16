"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#faf8f7] py-20 md:py-28">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#9e1915]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10 font-snd">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-gradient-to-r from-[#111827] via-[#9e1915] to-[#111827] text-white shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
          <div className="px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm md:text-base text-white/90 shadow-sm mb-6 font-burdaBold">
                {t("cta.title")}
              </div>

              <h2 className="text-3xl md:text-5xl xl:text-6xl font-burdaBold mb-6 leading-[1.15]">
                {t("cta.title")}
              </h2>

              <p className="text-lg md:text-2xl xl:text-3xl mb-10 text-white/85 leading-relaxed font-burdaLight max-w-4xl mx-auto">
                {t("cta.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center font-burdaBold">
                <a href="/contact">
                  <Button
                    size="lg"
                    className="h-14 md:h-15 bg-white text-[#9e1915] hover:bg-gray-100 px-8 md:px-10 rounded-full text-base md:text-lg font-burdaBold shadow-[0_15px_30px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {t("cta.button.book")}
                    <ArrowLeft className="w-5 h-5 mr-3" />
                  </Button>
                </a>

                <a href="/AVENUE Real Estate.pdf" download>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 md:h-15 border border-white/25 text-white hover:bg-white hover:text-[#9e1915] px-8 md:px-10 rounded-full text-base md:text-lg font-burdaBold backdrop-blur-sm bg-white/10 transition-all duration-300"
                  >
                    {t("cta.button.download")}
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              <div className="rounded-[24px] border border-white/12 bg-white/10 backdrop-blur-sm p-5 md:p-6 text-center">
                <div className="flex h-12 w-12 mx-auto mb-4 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                  <Phone className="w-6 h-6 text-white/90" />
                </div>
                <div className="text-xl md:text-2xl mb-2 font-burdaBold">
                  {t("cta.contact.call")}
                </div>
                <div className="text-white/80 text-base md:text-lg" dir="ltr">
                  +964 770 123 4567
                </div>
              </div>

              <div className="rounded-[24px] border border-white/12 bg-white/10 backdrop-blur-sm p-5 md:p-6 text-center">
                <div className="flex h-12 w-12 mx-auto mb-4 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                  <Mail className="w-6 h-6 text-white/90" />
                </div>
                <div className="text-xl md:text-2xl mb-2 font-burdaBold">
                  {t("cta.contact.email")}
                </div>
                <div className="text-white/80 text-base md:text-lg">
                  info@avenue-iq.com
                </div>
              </div>

              <div className="rounded-[24px] border border-white/12 bg-white/10 backdrop-blur-sm p-5 md:p-6 text-center">
                <div className="flex h-12 w-12 mx-auto mb-4 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                  <MapPin className="w-6 h-6 text-white/90" />
                </div>
                <div className="text-xl md:text-2xl mb-2 font-burdaBold">
                  {t("cta.contact.location")}
                </div>
                <div className="text-white/80 text-base md:text-lg">
                  {t("cta.contact.location.value")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;