"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { SiWhatsapp, SiTiktok } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
    { href: "/about", labelAr: "من نحن", labelEn: "About" },
    { href: "/what-we-do", labelAr: "خدماتنا", labelEn: "Services" },
    { href: "/projects", labelAr: "مشاريعنا", labelEn: "Projects" },
    { href: "/contact", labelAr: "اتصل بنا", labelEn: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#9e1915] text-white text-md py-1.5 px-4 font-burdaMedium">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 font-burdaMedium text-xl">
              <MapPin className="w-3.5 h-3.5" />
              <span>
                {language === "ar" ? "العراق، بغداد" : "Iraq, Baghdad"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              {
                Icon: Facebook,
                href: "https://www.facebook.com/share/1KfdQc2Jot/?mibextid=wwXIfr",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/avenuerealestateiq?igsh=NnphNGp0cHQxMGU",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/company/avenuerealestateiq",
              },
              {
                Icon: Youtube,
                href: "https://youtube.com/@avenuerealestate1?si=rq0DdEQS4t6lKj0H",
              },
              {
                Icon: SiWhatsapp,
                href: "https://whatsapp.com/channel/0029Vb3UX3SGpLHSr9FQxE02",
              },
              {
                Icon: SiTiktok,
                href: "https://www.tiktok.com/@avenuerealstate?_t=ZS-90Vgm4QCtUd&_r=1",
              },
            ].map(({ Icon, href }, i) => (
              <Link
                href={href}
                key={i}
                className="hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 font-burdaMedium">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/Avenue Logo Colored.png"
                alt="Avenue"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {links.map(({ href, labelAr, labelEn }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-xl font-burdaMedium relative group transition-colors ${
                      isActive
                        ? "text-[#9e1915]"
                        : "text-black hover:text-[#9e1915]"
                    }`}
                  >
                    {language === "ar" ? labelAr : labelEn}

                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-[#9e1915] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Language Toggle Button */}
              <Button
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                className="px-5 py-2 rounded-full text-lg font-burdaMedium bg-[#9e1915] text-white hover:bg-[#9e1915] hover:text-white hover:scale-105"
              >
                {language === "ar" ? "EN" : "AR"}
              </Button>

              <Link href="/contact">
                <Button className="text-xl bg-[#9e1915] text-white hover:bg-[#9e1915] hover:text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105">
                  {language === "ar"
                    ? "احجز استشارة مجانية"
                    : "Book Free Consultation"}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="font-burdaMedium lg:hidden mt-2 pb-4 bg-white rounded-lg shadow-lg animate-slideDown">
              <div className="flex flex-col gap-4 pt-4 px-4">
                {links.map(({ href, labelAr, labelEn }) => {
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`py-2 text-lg transition-colors ${
                        isActive
                          ? "text-[#9e1915] font-bold"
                          : "text-black hover:text-[#9e1915]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {language === "ar" ? labelAr : labelEn}
                    </Link>
                  );
                })}

                <Button
                  onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                  className="mt-2 w-full py-2 rounded-full text-lg font-burdaMedium bg-[#9e1915] text-white hover:bg-[#9e1915] hover:text-white"
                >
                  {language === "ar" ? "EN" : "AR"}
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
