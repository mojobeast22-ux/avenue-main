"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowLeft,
  Building2,
  Users,
  TrendingUp,
  Globe,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/avenuerealestateiq/about_contact_and_basic_info",
  },
  { icon: Instagram, url: "https://www.instagram.com/avenuerealestateiq/" },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/avenuerealestateiq/?originalSubdomain=iq",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCMk9f86fVXgqDr0AnTHdX1g",
  },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="font-snd bg-[#0b121a] text-white pt-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Top area */}
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* ABOUT */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center">
                  <img
                    src="/Avenue Logo White.png"
                    alt="Avenue"
                    className="h-11 w-auto object-contain"
                  />
                </Link>
              </div>

              <p className="text-gray-300 leading-8 text-base md:text-lg font-burdaLight mb-6">
                {t("footer.about.text")}
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, url }, i) => (
                  <Link
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-[#9e1915] hover:border-[#9e1915] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-5 md:p-6">
              <h3 className="text-xl font-burdaBold mb-6 text-white">
                {t("footer.quickLinks.title")}
              </h3>

              <ul className="space-y-3 text-sm md:text-base">
                {[
                  [t("footer.quickLinks.home"), "/"],
                  [t("footer.quickLinks.about"), "/about"],
                  [t("footer.quickLinks.services"), "/what-we-do"],
                  [t("footer.quickLinks.projects"), "/projects"],
                  [t("footer.quickLinks.news"), "/news"],
                  [t("footer.quickLinks.contact"), "/contact"],
                ].map(([label, link], i) => (
                  <li key={i}>
                    <Link
                      href={link}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <ArrowLeft className="w-4 h-4 text-[#9e1915]" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-5 md:p-6">
              <h3 className="text-xl font-burdaBold mb-6 text-white">
                {t("footer.services.title")}
              </h3>

              <ul className="space-y-3 text-sm md:text-base">
                {[
                  [t("footer.services.item1"), <Building2 key="1" className="w-4 h-4 text-[#9e1915]" />],
                  [t("footer.services.item2"), <TrendingUp key="2" className="w-4 h-4 text-[#9e1915]" />],
                  [t("footer.services.item3"), <Users key="3" className="w-4 h-4 text-[#9e1915]" />],
                  [t("footer.services.item4"), <Briefcase key="4" className="w-4 h-4 text-[#9e1915]" />],
                  [t("footer.services.item5"), <Globe key="5" className="w-4 h-4 text-[#9e1915]" />],
                ].map(([label, icon], i) => (
                  <li key={i}>
                    <Link
                      href="/what-we-do"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      {icon}
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div className="rounded-[24px] border border-white/8 bg-gradient-to-b from-[#9e1915]/15 to-white/[0.02] p-5 md:p-6">
              <h3 className="text-xl font-burdaBold mb-6 text-white">
                {t("footer.contact.title")}
              </h3>

              <div className="space-y-5 text-sm md:text-base text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/10 text-[#9e1915]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-burdaBold text-white mb-1">
                      {t("footer.contact.office")}
                    </div>
                    <div className="leading-7">{t("footer.contact.address1")}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/10 text-[#9e1915]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-white font-burdaBold" dir="ltr">
                    +964 770 123 4567
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/10 text-[#9e1915]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-burdaBold">
                      info@avenue-iq.com
                    </div>
                    <div className="text-gray-400 text-sm">
                      {t("footer.contact.phone")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 border-t border-white/10 py-6 text-sm md:text-base text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 font-burdaLight"
          dir="ltr"
        >
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {t("footer.rights")} Powered By{" "}
            <a
              
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Abraj aljadah .
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;