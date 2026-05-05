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
    <footer className="font-snd bg-slate-900 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* ABOUT */}
          <div>
            <div className="px-10 py-3 rounded-lg mb-6 w-fit">
              <Link href="/" className="flex items-center">
                <img
                  src="/Avenue Logo White.png"
                  alt="Avenue"
                  className="h-10"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-md md:text-xl font-burdaLight">
              {t("footer.about.text")}
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <Link
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-burdaBold mb-6">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-3 text-sm">
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
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-burdaBold mb-6">
              {t("footer.services.title")}
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                [t("footer.services.item1"), <Building2 key="1" />],
                [t("footer.services.item2"), <TrendingUp key="2" />],
                [t("footer.services.item3"), <Users key="3" />],
                [t("footer.services.item4"), <Briefcase key="4" />],
                [t("footer.services.item5"), <Globe key="5" />],
              ].map(([label, icon], i) => (
                <li key={i}>
                  <Link
                    href="/what-we-do"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-burdaBold mb-6">
              {t("footer.contact.title")}
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                <div>
                  <div className="font-semibold text-white mb-1">
                    {t("footer.contact.office")}
                  </div>
                  <div>{t("footer.contact.address1")}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-semibold" dir="ltr">
                    +964 770 123 4567
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-semibold">
                    info@avenue-iq.com
                  </div>
                  <div className="text-gray-400 text-xs">
                    {t("footer.contact.phone")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          className="border-t font-burdaLight border-gray-800 pt-8 text-md text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4"
          dir="ltr"
        >
          <p>
            &copy; {new Date().getFullYear()} {t("footer.rights")} Powered By{" "}
            <a
              href="https://swt-iq.com/"
              target="_blank"
              className="hover:text-white"
            >
              SmartWave Technologies.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
