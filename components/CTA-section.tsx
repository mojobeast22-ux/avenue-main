"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-[#9e1915] to-slate-900 text-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative z-10 font-snd">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-burdaBold mb-6 leading-tight">
            {t("cta.title")}
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed font-burdaLight">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center font-burdaBold">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#9e1915] hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                {t("cta.button.book")}
                <ArrowLeft className="w-6 h-6 mr-3" />
              </Button>
            </a>

            <a href="/AVENUE Real Estate.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#9e1915] px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm bg-white/10"
              >
                {t("cta.button.download")}
              </Button>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center font-burdaBold">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <div className="text-2xl mb-1">{t("cta.contact.call")}</div>
              <div className="text-gray-200 text-lg" dir="ltr">
                +964 770 123 4567
              </div>
            </div>

            <div>
              <Mail className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <div className="text-2xl mb-1">{t("cta.contact.email")}</div>
              <div className="text-gray-200 text-lg">info@avenue-iq.com</div>
            </div>

            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <div className="text-2xl mb-1">{t("cta.contact.location")}</div>
              <div className="text-gray-200 text-lg">
                {t("cta.contact.location.value")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
