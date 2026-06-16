"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
} from "lucide-react";
import { SiWhatsapp, SiTiktok } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  const socialLinks = [
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
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#9e1915] text-white border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex min-h-[44px] items-center justify-between gap-4 text-sm md:text-base font-burdaMedium">
            <div className="hidden md:flex items-center gap-2 text-white/95">
              <MapPin className="w-4 h-4" />
              <span>{language === "ar" ? "العراق، بغداد" : "Iraq, Baghdad"}</span>
            </div>

            <div className="flex items-center gap-3 md:gap-4 ms-auto">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link
                  href={href}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-black/5"
            : "bg-white/75 backdrop-blur-md border-b border-black/5"
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex h-[86px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/Avenue Logo Colored.png"
                alt="Avenue"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5">
              <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 px-3 py-2 shadow-sm">
                {links.map(({ href, labelAr, labelEn }) => {
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={href}
                      href={href}
                      className={clsx(
                        "relative rounded-full px-4 py-2 text-[17px] transition-all duration-300 font-burdaMedium",
                        isActive
                          ? "text-[#9e1915] bg-[#9e1915]/8"
                          : "text-black/85 hover:text-[#9e1915] hover:bg-black/[0.03]"
                      )}
                    >
                      {language === "ar" ? labelAr : labelEn}
                    </Link>
                  );
                })}
              </div>

              {/* Language Switch */}
              <Button
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                variant="outline"
                className="rounded-full border-black/10 bg-white text-black hover:bg-black/[0.03] hover:text-[#9e1915] px-4 h-11 text-sm md:text-base shadow-sm"
              >
                {language === "ar" ? "English" : "العربية"}
                <ChevronDown className="w-4 h-4 ms-2 opacity-70" />
              </Button>

              {/* CTA */}
              <Link href="/contact">
                <Button className="h-11 rounded-full bg-[#9e1915] px-6 text-white text-sm md:text-base shadow-[0_10px_25px_rgba(158,25,21,0.25)] hover:bg-[#8b1411] transition-all duration-300 hover:translate-y-[-1px]">
                  {language === "ar"
                    ? "احجز استشارة مجانية"
                    : "Book Free Consultation"}
                </Button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                variant="outline"
                className="rounded-full border-black/10 bg-white text-black hover:bg-black/[0.03] px-3 h-10 text-sm shadow-sm"
              >
                {language === "ar" ? "EN" : "AR"}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/[0.03]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={clsx(
              "lg:hidden overflow-hidden transition-all duration-300",
              isMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
            )}
          >
            <div className="rounded-3xl border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-4">
              <div className="flex flex-col gap-2">
                {links.map(({ href, labelAr, labelEn }) => {
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        "rounded-2xl px-4 py-3 text-base font-burdaMedium transition-all duration-300",
                        isActive
                          ? "bg-[#9e1915]/10 text-[#9e1915]"
                          : "text-black hover:bg-black/[0.03] hover:text-[#9e1915]"
                      )}
                    >
                      {language === "ar" ? labelAr : labelEn}
                    </Link>
                  );
                })}

                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="mt-3 w-full h-12 rounded-full bg-[#9e1915] text-white hover:bg-[#8b1411]">
                    {language === "ar"
                      ? "احجز استشارة مجانية"
                      : "Book Free Consultation"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;