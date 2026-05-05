"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Lock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  const [isMapActive, setIsMapActive] = useState(false);

  const handleMapClick = () => setIsMapActive(true);
  const handleMapLock = () => setIsMapActive(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectInterest: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectInterest: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact_info_address_title"),
      details: isRTL
        ? [
            "القادسية، شارع مجمع الوزراء، قرب الصابئة المندائية",
            "بغداد، العراق",
          ]
        : ["Al-Qadisiyah, Ministers Complex Street", "Baghdad, Iraq"],
      color: "from-gray-600 to-[#9e1915]",
    },
    {
      icon: Phone,
      title: t("contact_info_phone_title"),
      details: ["+964 770 123 4567", "+964 781 456 7890"],
      color: "from-[#1a365d] to-[#9e1915]",
    },
    {
      icon: Mail,
      title: t("contact_info_email_title"),
      details: ["info@avenue-iq.com", "support@avenue-iq.com"],
      color: "from-[#1a365d] to-[#9e1915]",
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
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
              {t("contact_breadcrumb_home")}
            </Link>
            <ChevronRight
              className={`w-4 h-4 text-gray-400 ${isRTL ? "" : "rotate-180"}`}
            />
            <span className="text-[#9e1915]">
              {t("contact_breadcrumb_page")}
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
              {t("contact_hero_title")}
            </h1>
            <p className="text-xl md:text-3xl font-burdaLight leading-relaxed">
              {t("contact_hero_sub")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white">
        {/* Contact Information */}
        <section className="py-16">
          <div className="font-snd container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
                {t("contact_section_title_chip")}
              </div>

              <h2 className="text-4xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
                {t("contact_section_title")}
              </h2>

              <p className="text-xl md:text-3xl text-black font-burdaLight max-w-3xl mx-auto">
                {t("contact_section_sub")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-3xl font-burdaBold text-black mb-4">
                      {info.title}
                    </h3>

                    <div className="space-y-2" dir="ltr">
                      {info.details.map((d, idx) => (
                        <p
                          key={idx}
                          className="text-black font-burdaLight leading-relaxed text-xl md:text-2xl"
                        >
                          {d}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8">
          <div className="font-snd container mx-auto px-4">
            <div className="grid gap-16">
              {/* Form */}
              <div className="mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-burdaBold text-black mb-4">
                    {t("contact_form_title")}
                  </h2>
                  <p className="text-xl md:text-3xl text-black font-burdaLight">
                    {t("contact_form_sub")}
                  </p>
                </div>

                {isSubmitted ? (
                  <Card className="p-8 text-center border-0 shadow-lg bg-green-50">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-burdaBold text-green-700 mb-2">
                        {t("contact_form_success_title")}
                      </h3>
                      <p className="text-green-600 font-burdaLight text-xl md:text-2xl">
                        {t("contact_form_success_sub")}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="p-8 border-0 shadow-lg">
                    <CardContent className="p-0">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Name */}
                          <div>
                            <Label
                              htmlFor="name"
                              className="text-[#1a365d] font-burdaMedium mb-2 block"
                            >
                              {t("contact_form_name")} *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                              placeholder={t("contact_form_placeholder_name")}
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <Label
                              htmlFor="email"
                              className="text-[#1a365d] font-burdaMedium mb-2 block"
                            >
                              {t("contact_form_email")} *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                              placeholder={t("contact_form_placeholder_email")}
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <Label
                            htmlFor="subject"
                            className="text-[#1a365d] font-burdaMedium mb-2 block"
                          >
                            {t("contact_form_subject")} *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                            placeholder={t("contact_form_placeholder_subject")}
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <Label
                            htmlFor="message"
                            className="text-[#1a365d] font-burdaMedium mb-2 block"
                          >
                            {t("contact_form_message")} *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="border-gray-300 focus:border-[#1a365d] focus:ring-[#1a365d]"
                            placeholder={t("contact_form_placeholder_message")}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-black hover:bg-[#c53030] text-white py-3 text-lg font-burdaMedium rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          {t("contact_form_submit")}
                          <Send className="w-5 h-5 mr-2" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Map */}
              <div className="space-y-8">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d106730.15825456278!2d44.3557296!3d33.2843572!3m2!1i1024!2i768!4f13.1!2m1!1z2KPZgdmG2YrZiCDZhNmE2LnZgtin2LHYp9iq4oCt!5e0!3m2!1sen!2siq!4v1748429043225!5m2!1sen!2siq"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>

                    {!isMapActive && (
                      <div
                        className="absolute inset-0 bg-[#1a365d]/20 flex items-center justify-center cursor-pointer transition-opacity duration-300"
                        onClick={handleMapClick}
                      >
                        <div className="text-center text-white">
                          <MapPin className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-xl md:text-2xl font-burdaLight">
                            {t("contact_map_title")}
                          </p>
                          <p className="text-lg md:text-xl opacity-90 font-burdaLight">
                            {t("contact_map_city")}
                          </p>
                          <p className="text-xl md:text-2xl mt-2 font-burdaLight">
                            {t("contact_map_click")}
                          </p>
                        </div>
                      </div>
                    )}

                    {isMapActive && (
                      <button
                        onClick={handleMapLock}
                        className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-90 transition-all flex items-center gap-1"
                      >
                        <Lock className="w-4 h-4" />
                        {t("contact_map_lock")}
                      </button>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="py-20 bg-gray-50">
          <div className="font-snd container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-gray-100 text-[#9e1915] px-4 py-2 rounded-full text-4xl font-burdaBold mb-6">
                {t("social_chip")}
              </div>

              <h2 className="text-3xl md:text-6xl font-burdaBold text-[#9e1915] mb-6">
                {t("social_title")}
              </h2>

              <p className="text-xl md:text-3xl text-black font-burdaLight max-w-3xl mx-auto">
                {t("social_sub")}
              </p>
            </div>

            <div className="flex justify-center gap-6">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/avenuerealestateiq/about_contact_and_basic_info"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-8 h-8 text-white" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/avenuerealestateiq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-[#E4405F] to-[#F56040] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-8 h-8 text-white" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/avenuerealestateiq/?originalSubdomain=iq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#0A66C2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-8 h-8 text-white" />
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/channel/UCMk9f86fVXgqDr0AnTHdX1g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Youtube className="w-8 h-8 text-white" />
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://whatsapp.com/channel/0029Vb3UX3SGpLHSr9FQxE02"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0012.03 0C5.48 0 .16 5.31.16 11.85a11.81 11.81 0 001.61 5.94L0 24l6.43-1.67a11.77 11.77 0 005.6 1.43h.01c6.56 0 11.87-5.32 11.88-11.86 0-3.17-1.24-6.16-3.4-8.42zM12.03 21.5a9.6 9.6 0 01-4.91-1.35l-.35-.21-3.81.99 1.02-3.72-.24-.38a9.43 9.43 0 01-1.45-5.02C2.29 6.5 6.83 2 12.03 2c2.57 0 4.98 1 6.8 2.81a9.54 9.54 0 012.82 6.82c0 5.21-4.54 9.87-9.62 9.87zm5.49-7.28c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.6-.92-2.18-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.06 1.03-1.06 2.52 0 1.5 1.09 2.95 1.24 3.15.15.2 2.14 3.27 5.18 4.47.72.3 1.29.48 1.73.61.73.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
                </svg>
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@avenuerealstate?_t=ZS-90Vgm4QCtUd&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.5 3c.2 1.3 1 2.5 2.1 3.2 1 .6 2.2.9 3.4.9V10c-1.7 0-3.4-.5-4.9-1.4v6.4a7 7 0 11-7-7c.2 0 .4 0 .6.02v3.5a3.5 3.5 0 104.9 3.2V3h.9z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
