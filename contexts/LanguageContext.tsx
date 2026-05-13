"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// English translations
const enTranslations: Record<string, string> = {
  // Hero Section - English
  "hero.slide1.title": "Welcome to Avenue Investment & Real Estate Development",
  "hero.slide1.subtitle": "Leaders in real estate consulting since 2019",
  "hero.slide1.description":
    "We strive to meet our clients' needs by providing professional advice to help them make successful real estate decisions.",
  "hero.slide1.button": "Discover More",
  "hero.slide1.videoText": "Watch Video",

  "hero.slide2.title": "Our Vision",
  "hero.slide2.subtitle":
    "Towards exceptional residential communities and innovative development",
  "hero.slide2.description":
    "We aim to be the most trusted real estate developer, focusing on quality, reliability, and exceptional community-building.",
  "hero.slide2.button": "Learn About Our Vision",
  "hero.slide2.videoText": "Vision & Goals",

  "hero.slide3.title": "Our Commitment to Sustainability",
  "hero.slide3.subtitle": "We respect the environment and encourage innovation",
  "hero.slide3.description":
    "Through green construction technologies and enhanced energy efficiency, we provide innovative solutions to match the real estate market.",
  "hero.slide3.button": "Learn More",
  "hero.slide3.videoText": "Sustainable Projects",

  "hero.prev": "Previous",
  "hero.next": "Next",

  // About Section - English
  "about.sectionTag": "About Us",
  "about.title1": "Avenue Towers",
  "about.title2": "Experts in Real Estate Development",
  "about.p1":
    "Our company was founded in 2019, and since then we have worked hard to provide reliable real estate consulting based on deep understanding of the Iraqi market and extensive industry experience.",
  "about.p2":
    "We are committed to offering innovative solutions and effective strategies that help our clients achieve their goals and enhance the quality of their real estate projects.",

  "about.feature1.title": "Specialized Team",
  "about.feature1.desc":
    "A group of professionals with over 10 years of experience",

  "about.feature2.title": "Professional Consulting",
  "about.feature2.desc":
    "Accurate guidance for successful investment decisions",

  "about.feature3.title": "Consistent Success",
  "about.feature3.desc": "A proven track record with our clients",

  "about.feature4.title": "Reliable Service",
  "about.feature4.desc": "Continuous focus on quality and transparency",

  "about.button.more": "Learn More About Us",
  "about.button.download": "Download Profile",

  // Services Section - English
  "services.sectionTag": "Our Services",
  "services.title": "Integrated Real Estate & Investment Solutions",
  "services.description":
    "We provide a range of services covering all stages of investment and real estate development, guided by a professional team with years of experience in the Iraqi market.",

  "services.item1": "Market Analysis & Trends",
  "services.item2": "Investor Consulting",
  "services.item3": "Marketing Planning",
  "services.item4": "Organizational Development",

  // Projects Section - English
  "projects.sectionTag": "Our Projects",
  "projects.title": "Innovative Projects Reflecting Our Ambition",
  "projects.description":
    "At Avenue, we focus on developing distinguished real estate projects that enhance quality of life and deliver successful, sustainable investments.",
  "projects.button.all": "View All Projects",
  "projects.pic1": "Discover the beauty and luxury of the project",

  // Project 1
  "project1.title": "Baghdad Boulevard",
  "project1.category": "Residential Project",
  "project1.location": "Baghdad, Iraq",
  "project1.status": "Completed",
  "project1.area": "1,003,800 sqm",
  "project1.units": "200 units",
  "project1.description":
    "Baghdad Boulevard is the first Saudi investment in the capital Baghdad, embodying a modern urban vision that blends luxury, green spaces, and a prime location—making it the ideal destination for integrated living.",
  "project1.feature1": "Green Spaces",
  "project1.feature2": "Parking Lot",
  "project1.feature3": "24/7 Security",
  "project1.feature4": "Swimming Pool",
  "project1.feature5": "Kids Play Area",

  // Project 2
  "project2.title": "Al-Ikhwa Residential City OCR",
  "project2.category": "Residential Project",
  "project2.location": "Baghdad, Iraq",
  "project2.status": "Completed",
  "project2.area": "75,000 sqm",
  "project2.units": "150 Offices",
  "project2.description":
    "The OCR project is a prime investment and lifestyle destination in the heart of New Baghdad — combining a strategic location, modern designs, and a fully integrated urban experience.",
  "project2.feature1": "Meeting Rooms",
  "project2.feature2": "Central Air Conditioning",
  "project2.feature3": "Restaurants",
  "project2.feature4": "Multi-level Parking",

  // Project 3
  "project3.title": "Bloom Village",
  "project3.category": "Residential Project",
  "project3.location": "Baghdad, Iraq",
  "project3.status": "Completed",
  "project3.area": "30,000 sqm",
  "project3.units": "80 Offices",
  "project3.description":
    "Bloom Village is an upscale residential community designed to provide its residents with a unique, fully integrated living experience.",
  "project3.feature1": "Modern Technology",
  "project3.feature2": "Rest Areas",
  "project3.feature3": "Cafeteria",
  "project3.feature4": "High-Speed Networks",

  // Breadcrumb
  "projects.breadcrumb.home": "Home",
  "projects.breadcrumb.current": "Our Projects",
  "projects.overview": "Overview",
  "projects.features": "Features",
  "projects.pic": "Photo Gallery",
  "projects.pic2": "Explore the beauty and luxury of the project of",
  "projects.bloom": "Bloom Village project brochures",
  "projects.bloom2":
    "Discover more details about the project by browsing and downloading the following brochures.",
  "projects.bloom.brouchure": "General brochure",
  "projects.bloom.brouchure2": "Villas and Plans Brochure",
  "projects.bloom.brouchure3": "Download the brochure",
  "projects.bloom.brouchure4": " Master Plan",

  // Hero
  "projects.hero.title": "Our Projects",
  "projects.paragraph": "Innovative projects that reflect our ambition",
  "projects.hero.subtitle":
    "Discover a variety of luxury residential and commercial projects in the best locations in Iraq",
  "projects.hero.alt": "Avenue Projects",

  // All Projects Section
  "projects.all.title": "All Projects",
  "projects.all.button": "View Details",

  // CTA
  "projects.cta.title": "Looking for your dream home?",
  "projects.cta.subtitle":
    "Our team of experts is ready to help you find the perfect project that meets your needs and aspirations",
  "projects.cta.button": "Contact Us",

  // Status
  "projects.list.status.available": "Available Now",

  /***************
   * Project 1
   ***************/
  "projects.list.1.title": "Jadat Baghdad",
  "projects.list.1.type": "Residential",
  "projects.list.1.location": "Iraq, Baghdad",
  "projects.list.1.desc":
    "An integrated project on an area of 1,003,800 square meters, featuring a balance between green spaces and modern construction. The first Saudi investment in Baghdad, with a strategic location near the Equestrian Club and Veterinary College. Combines luxury, nature, and modern life.",

  /***************
   * Project 2
   ***************/
  "projects.list.2.title": "OCR Residential City",
  "projects.list.2.type": "Residential",
  "projects.list.2.location": "Iraq, Baghdad",
  "projects.list.2.desc":
    "An upscale residential and commercial project in a prime location next to the American University and Al-Bayan University. Features modern apartments with areas of 142 sqm and 172 sqm, and a 2 km main street hosting international brands. Combines housing, shopping, and entertainment in the heart of New Baghdad.",

  /***************
   * Project 3
   ***************/
  "projects.list.3.title": "Bloom Village",
  "projects.list.3.type": "Residential",
  "projects.list.3.location": "Iraq, Baghdad",
  "projects.list.3.desc":
    "A luxury residential community offering villas with areas starting from 200 sqm up to 1000 sqm, with integrated facilities including paddle courts, green spaces, sports clubs, swimming pools, and an equestrian club. An ideal destination for upscale family living in an integrated environment.",

  /***************
   * Project 4
   ***************/
  "projects.list.4.title": "Al Naseem Compound",
  "projects.list.4.type": "Residential Compound",
  "projects.list.4.location": "Baghdad - Iraq",
  "projects.list.4.desc":
    "A modern residential compound that offers a comfortable environment and integrated services for families.",

  // CTA Section - English
  "cta.title": "Are you ready to take your next investment step",
  "cta.description":
    "Contact us today and discover how Avenue can help you achieve your real estate and investment goals through innovative solutions and solid expertise.",

  "cta.button.book": "Book Your Consultation Now",
  "cta.button.download": "Download Company Profile",

  "cta.contact.call": "Call Us",
  "cta.contact.email": "Email Us",
  "cta.contact.location": "Our Location",

  "cta.contact.location.value": "Baghdad - Iraq",

  // Footer Section - English
  "footer.about.text":
    "Avenue is an Iraqi company founded in 2019, specialized in real estate development and investment, aiming to build modern communities, high-quality projects, and sustainable partnerships.",

  "footer.quickLinks.title": "Quick Links",
  "footer.quickLinks.home": "Home",
  "footer.quickLinks.about": "About Us",
  "footer.quickLinks.services": "Our Services",
  "footer.quickLinks.projects": "Projects",
  "footer.quickLinks.news": "News",
  "footer.quickLinks.contact": "Contact Us",

  "footer.services.title": "Our Services",
  "footer.services.item1": "Market Analysis & Trends",
  "footer.services.item2": "Investor Consulting",
  "footer.services.item3": "Marketing Planning",
  "footer.services.item4": "Administrative Development",
  "footer.services.item5": "Real Estate Evaluation",

  "footer.contact.title": "Contact Information",
  "footer.contact.office": "Head Office",
  "footer.contact.address1":
    "Baghdad – Al-Qadisiyah, Ministers Complex Street, near Mandaean Community.",
  "footer.contact.address2": "Iraq",
  "footer.contact.phone": "General Inquiries",

  "footer.rights": "All rights reserved.",

  // About Page - English

  // Breadcrumb
  "about.breadcrumb.home": "Home",
  "about.breadcrumb.about": "About Us",

  // Hero
  "about.hero.title": "About Us",
  "about.hero.subtitle":
    "Leading Iraqi expertise in investment and real estate development since 2019",

  // Story
  "about.story.tag": "Our Story",
  "about.story.title": "From Iraq to the Future",
  "about.story.p1":
    "Avenue Real Estate was founded in 2019 and has since achieved remarkable growth in the Iraqi real estate market through providing integrated consulting services and exceptional development projects.",
  "about.story.p2":
    "We believe our success comes from our deep understanding of the local market and our commitment to improving quality of life and building safe, sustainable communities.",
  "about.story.year": "Year Founded",
  "about.story.projects": "Successful Projects",
  "about.story.box.title": "Trust & Partnership",
  "about.story.box.desc": "Local expertise with a global vision",

  // Vision & Mission
  "about.vm.tag": "Our Vision & Mission",
  "about.vm.title": "Our Strategic Foundations",
  "about.vm.subtitle":
    "We are committed to delivering high-quality projects and professional consultancy aligned with our clients’ goals and sustainable development",

  "about.vision.title": "Our Vision",
  "about.vision.desc":
    "To be the most trusted real estate developer in Iraq and the region by providing innovative urban solutions that enhance quality of life",

  "about.mission.title": "Our Mission",
  "about.mission.desc":
    "To offer comprehensive and reliable real estate development and investment services based on innovation, quality, customer satisfaction, and national development",

  // Values
  "about.values.tag": "Our Values",
  "about.values.title": "The Pillars We Believe In",

  "about.values.item1": "Integrity",
  "about.values.item1.desc": "We act with honesty and transparency",

  "about.values.item2": "Excellence",
  "about.values.item2.desc":
    "We strive for innovation and the highest quality standards",

  "about.values.item3": "Responsibility",
  "about.values.item3.desc":
    "We are committed to our community and contribute to its wellbeing",

  "about.values.item4": "Sustainability",
  "about.values.item4.desc":
    "We protect the environment and plan for the future",

  // Leadership
  "about.leaders.tag": "Leadership Team",
  "about.leaders.title": "Visionary Leaders",
  "about.leaders.subtitle":
    "A team with deep expertise and a forward-looking vision leading Iraq’s investment future",

  "about.leaders.ceo.title": "Chairman",
  "about.leaders.ceo.desc":
    "We firmly believe that success is not measured solely by numbers and achievements, as stated by the Chairman of the Board, but also by our positive impact on our community. We are committed to creating added value for our society through social initiatives that reflect our humanitarian values ​​and our concern for Iraqi youth and sustainable development.",

  "about.leaders.vp.title": "Vice Chairman",
  "about.leaders.vp.desc":
    "We work diligently to support projects and initiatives that contribute to improving quality of life, whether through education and skills development or by participating in environmental programs aimed at preserving natural resources and promoting sustainability. We believe our responsibility extends beyond our daily operations, ensuring that our business activities are an integral part of every project we participate in and every initiative we support, embodying our vision of building a stronger and more prosperous society. We place the community's best interests at the heart of our strategies and strive to ensure our efforts are sustainable and have a lasting positive impact. Through our commitment, we aspire to create real change that impacts individuals' lives and contributes to the growth and development of our beloved country.",

  // CTA
  "about.cta.title": "Be Part of the Change",
  "about.cta.subtitle":
    "Contact us today and begin your investment journey with Avenue",
  "about.cta.button": "Contact Us",

  // Breadcrumb
  "what.breadcrumb.home": "Home",
  "what.breadcrumb.current": "Our Services",

  // Hero
  "what.hero.title": "Our Services",
  "what.hero.subtitle":
    "We provide integrated and comprehensive solutions in real estate development, marketing, investment, and relationship management.",

  // Section: Overview
  "what.overview.badge": "Our Services",
  "what.overview.title": "Our Work Fields",
  "what.overview.subtitle":
    "We offer complete services for every stage of the real estate journey.",

  // Overview Services Cards Titles
  "what.service1": "Market Analysis & Marketing Strategy",
  "what.service2": "Real Estate & Investor Consulting",
  "what.service3": "Real Estate Valuation",
  "what.service4": "Training Programs",
  "what.service5": "Performance Enhancement",

  // Section: Methodology
  "what.methodology.badge": "Our Methodology",
  "what.methodology.title": "How We Work",
  "what.methodology.subtitle":
    "We follow a scientific and structured methodology to ensure the best results.",

  // Steps
  "what.step1.title": "Planning & Research",
  "what.step1.desc":
    "Comprehensive market and site study with a detailed strategic plan.",

  "what.step2.title": "Design & Development",
  "what.step2.desc":
    "Innovative designs combining aesthetics, functionality, and sustainability.",

  "what.step3.title": "Execution & Construction",
  "what.step3.desc":
    "Implementing the project according to the highest standards of quality and safety.",

  "what.step4.title": "Delivery & Follow-up",
  "what.step4.desc":
    "Project handover with after-sales support and continuous maintenance.",

  // Section: Detailed Services
  "what.detailed.title": "Detailed Services",
  "what.detailed.subtitle":
    "We offer three core service packages covering all real estate development and marketing needs.",

  // Detailed — Group Titles
  "what.detail.group1": "Real Estate Development Services",
  "what.detail.group2": "Real Estate Marketing Services",
  "what.detail.group3": "Additional Support Services",

  // Detailed — Group 1 Items
  "what.detail1.item1":
    "• Comprehensive real estate feasibility studies including site analysis, target audience, competitors, and investment opportunities.",
  "what.detail1.item2":
    "• Creating the project business plan including development stages, pricing, expected ROI, and financing strategies.",
  "what.detail1.item3":
    "• Local and regional real estate market analysis with competitive benchmarking.",
  "what.detail1.item4":
    "• Investor and owner relations management with monthly performance reports.",
  "what.detail1.item5":
    "• Sales and CRM management ensuring accurate follow-up from the first inquiry to contract signing.",
  "what.detail1.item6":
    "• Branding and visual identity creation for real estate projects (name, logo, colors, social media, brochures, website).",

  // Detailed — Group 2 Items
  "what.detail2.item1":
    "• Full marketing strategies including content, ads, field events, and PR.",
  "what.detail2.item2":
    "• Professional social media management creating high-quality content (posts, reels, motion graphics, stories).",
  "what.detail2.item3":
    "• Digital advertising campaigns (Meta, Google, TikTok, LinkedIn) with tracking, retargeting, and conversion optimization.",
  "what.detail2.item4":
    "• Premium real estate photography & videography including interior/exterior shots, 3D renderings, drone footage, and promotional reels.",
  "what.detail2.item5":
    "• Lead & sales funnel management to convert followers into real clients.",
  "what.detail2.item6":
    "• Real estate exhibitions & event organization including branding, coverage, and pre-marketing.",
  "what.detail2.item7":
    "• Public relations & media outreach connecting with press and influencers.",

  // Detailed — Group 3 Items
  "what.detail3.item1":
    "• Preparing professional PowerPoint presentations and PDF investor files.",
  "what.detail3.item2": "• Developing real estate project websites.",
  "what.detail3.item3": "• After-sales services and resident management.",
  "what.detail3.item4":
    "• Monthly performance analytics and reporting (Reports & Insights).",

  // Contact
  "contact_breadcrumb_home": "Home",
  "contact_breadcrumb_page": "Contact Us",

  "contact_hero_title": "Contact Us",
  "contact_hero_sub":
    "We are here to help you find your dream home or answer your inquiries.",

  "contact_section_title_chip": "Contact Us",
  "contact_section_title": "How You Can Reach Us",
  "contact_section_sub":
    "Our specialized team is always ready to assist you through multiple channels.",

  "contact_info_address_title": "Address",
  "contact_info_phone_title": "Phone",
  "contact_info_email_title": "Email",

  "contact_form_title": "Send Us a Message",
  "contact_form_sub":
    "Fill out the form below and we will get back to you as soon as possible.",

  "contact_form_name": "Full Name",
  "contact_form_email": "Email",
  "contact_form_subject": "Subject",
  "contact_form_message": "Message",

  "contact_form_placeholder_name": "Enter your full name",
  "contact_form_placeholder_email": "Enter your email",
  "contact_form_placeholder_subject": "Message subject",
  "contact_form_placeholder_message": "Write your message here...",

  "contact_form_submit": "Send Message",

  "contact_form_success_title": "Your message has been sent successfully!",
  "contact_form_success_sub": "We will contact you within 24 hours.",

  "contact_map_title": "Our location on the map",
  "contact_map_city": "Baghdad, Iraq",
  "contact_map_click": "(Click to activate the map)",
  "contact_map_lock": "Lock Map",

  "social_chip": "Follow Us",
  "social_title": "Stay Connected",
  "social_sub": "Follow our latest updates and news on social media.",

  /**************************
   * PROJECT DETAILS PAGE - ENGLISH
   **************************/

  // Project 1 - Jadat Baghdad
  "projects.details.jadatbaghdad.title": "Jadat Baghdad",
  "projects.details.jadatbaghdad.type": "Residential",
  "projects.details.jadatbaghdad.location": "Al-Ameriya, Baghdad",
  "projects.details.jadatbaghdad.status": "Available Now",
  "projects.details.jadatbaghdad.description":
    "Jadat Baghdad is the first Saudi investment in the capital Baghdad, embodying a modern urban vision that combines luxury, green spaces, and a strategic location that makes it the ideal destination for integrated living.",
  "projects.details.jadatbaghdad.longDescription.1":
    "Jadat Baghdad project extends over an area of 1,003,800 square meters, with 60% dedicated to green spaces and 40% for horizontal and vertical construction, creating an ideal balance between nature and modern life.",
  "projects.details.jadatbaghdad.longDescription.2":
    "The project is located in Al-Ameriya area opposite the College of Veterinary Medicine and adjacent to the Equestrian Club, within the Al-Ameriya real estate registration circle, and enjoys a strategic location connected to the international road from the north, the old Abu Ghraib road from the south, and Al-Ameriya road and Al-Jihad neighborhood from the east.",
  "projects.details.jadatbaghdad.longDescription.3":
    "Jadat Baghdad is the first Saudi investment in the capital Baghdad, embodying a modern urban vision that combines luxury, green spaces, and a strategic location that makes it the ideal destination for integrated living.",
  "projects.details.jadatbaghdad.feature.1":
    "60% of the project is green spaces",
  "projects.details.jadatbaghdad.feature.2": "Modern urban design",
  "projects.details.jadatbaghdad.feature.3":
    "Strategic location in the heart of Baghdad",
  "projects.details.jadatbaghdad.feature.4": "Adjacent to the Equestrian Club",
  "projects.details.jadatbaghdad.feature.5": "Multiple access roads",
  "projects.details.jadatbaghdad.feature.6":
    "Balance between nature and modern life",
  "projects.details.jadatbaghdad.location.address": "Al-Ameriya, Baghdad, Iraq",
  "projects.details.jadatbaghdad.nearby.1": "College of Veterinary Medicine",
  "projects.details.jadatbaghdad.nearby.2": "Equestrian Club",
  "projects.details.jadatbaghdad.nearby.3": "International Road",
  "projects.details.jadatbaghdad.nearby.4": "Al-Jihad Neighborhood",

  // Project 2 - OCR
  "projects.details.ocr.title": "OCR Residential City",
  "projects.details.ocr.type": "Residential",
  "projects.details.ocr.location": "Near Baghdad International Airport",
  "projects.details.ocr.status": "Available Now",
  "projects.details.ocr.description":
    "The OCR project is located in a strategic position near Baghdad International Airport, next to Al-Bayan University and the American University in Baghdad, and features a 2 km main street hosting a collection of international brands.",
  "projects.details.ocr.longDescription.1":
    "The OCR project is located in a strategic position near Baghdad International Airport, next to Al-Bayan University and the American University in Baghdad, and features a 2 km main street hosting a collection of international brands. The project also includes residential apartments with areas of 142 square meters and 172 square meters, designed according to modern standards that combine luxury and practicality.",
  "projects.details.ocr.longDescription.2":
    "The OCR project is an investment destination and upscale living in the heart of New Baghdad — combining prime location, contemporary designs, and an integrated urban experience. By integrating housing, shopping, and entertainment, the project offers a unique lifestyle that meets the aspirations of both families and investors.",
  "projects.details.ocr.feature.1":
    "Strategic location near the airport",
  "projects.details.ocr.feature.2": "2 km main street",
  "projects.details.ocr.feature.3": "International brands",
  "projects.details.ocr.feature.4": "Contemporary designs",
  "projects.details.ocr.feature.5":
    "Integrated environment for living and entertainment",

  // Project 3 - Bloom Village
  "projects.details.bloomvillage.title": "Bloom Village",
  "projects.details.bloomvillage.type": "Residential",
  "projects.details.bloomvillage.location": "New Baghdad",
  "projects.details.bloomvillage.status": "Available Now",
  "projects.details.bloomvillage.description":
    "Bloom Village is an upscale residential community designed to provide its residents with a unique, integrated living experience with spaces starting from 200 square meters up to 1000 square meters.",
  "projects.details.bloomvillage.longDescription.1":
    "Bloom Village is an upscale residential community designed to provide its residents with a unique, integrated living experience. The project includes six diverse spaces starting from 200 square meters and reaching 250 square meters, 300 square meters, 600 square meters, 800 square meters, and 1000 square meters, providing wide options suitable for both families and investors.",
  "projects.details.bloomvillage.longDescription.2":
    "In addition to residences, Bloom Village features distinguished facilities such as paddle courts, extensive green spaces, an equestrian club, swimming pools, and sports clubs — all in one place to provide a lifestyle that combines comfort, luxury, and activity.",
  "projects.details.bloomvillage.feature.1": "Paddle courts",
  "projects.details.bloomvillage.feature.2": "Equestrian club",
  "projects.details.bloomvillage.feature.3": "Multiple swimming pools",
  "projects.details.bloomvillage.feature.4": "Sports clubs",
  "projects.details.bloomvillage.feature.5": "Extensive green spaces",

  // Project 4 - Al Naseem
  "projects.details.alnaseem.title": "Al Naseem Compound",
  "projects.details.alnaseem.type": "Residential Compound",
  "projects.details.alnaseem.location": "Baghdad - Iraq",
  "projects.details.alnaseem.status": "Available Now",
  "projects.details.alnaseem.description":
    "A modern residential compound that offers a comfortable environment and integrated services for families.",
  "projects.details.alnaseem.longDescription.1":
    "Al Naseem Compound is an integrated residential project designed to provide a modern and comfortable lifestyle for families.",
  "projects.details.alnaseem.longDescription.2":
    "The project features a contemporary layout, essential services, and spaces suited to different needs.",
  "projects.details.alnaseem.longDescription.3":
    "It focuses on quality execution, a suitable location, and providing a safe and quiet residential environment.",
  "projects.details.alnaseem.feature.1": "Prime location",
  "projects.details.alnaseem.feature.2": "Modern design",
  "projects.details.alnaseem.feature.3": "Integrated services",
  "projects.details.alnaseem.feature.4": "Green spaces",
  "projects.details.alnaseem.feature.5": "Safe residential environment",
  "projects.details.alnaseem.feature.6": "Multiple housing options",
};

// Arabic translations
const arTranslations: Record<string, string> = {
  // Hero Section - Arabic
  "hero.slide1.title": "مرحباً بكم في أفينيو للاستثمار والتطوير العقاري",
  "hero.slide1.subtitle": "رائدون في تقديم الاستشارات العقارية منذ 2019",
  "hero.slide1.description":
    "نسعى جاهدين لتلبية متطلبات عملائنا من خلال تقديم المشورة المهنية لمساعدتهم على اتخاذ قرارات ناجحة في العقارات.",
  "hero.slide1.button": "اكتشف المزيد",
  "hero.slide1.videoText": "شاهد الفيديو",

  "hero.slide2.title": "رؤيتنا",
  "hero.slide2.subtitle": "نحو مجتمعات سكنية متميزة وتطوير مبتكر",
  "hero.slide2.description":
    "نسعى لأن نكون المطور العقاري الأكثر ثقة، مع التركيز على الجودة العالية والموثوقية، وتجربة استثنائية في بناء المجتمعات.",
  "hero.slide2.button": "تعرف على رؤيتنا",
  "hero.slide2.videoText": "رؤية وأهداف",

  "hero.slide3.title": "التزامنا نحو التنمية المستدامة",
  "hero.slide3.subtitle": "نحترم البيئة ونشجع الابتكار",
  "hero.slide3.description":
    "من خلال تقنيات البناء الخضراء وتحسين كفاءة استهلاك الطاقة، نقدم حلولاً مبتكرة لمواكبة السوق العقاري.",
  "hero.slide3.button": "اعرف المزيد",
  "hero.slide3.videoText": "مشاريع مستدامة",

  "hero.prev": "السابق",
  "hero.next": "التالي",

  // About Section - Arabic
  "about.sectionTag": "من نحن",
  "about.title1": "أبراج الجادة (Avenue)",
  "about.title2": "خبراء في التطوير العقاري",
  "about.p1":
    "تأسست شركتنا في عام 2019، ومنذ ذلك الحين نسعى جاهدين لتقديم استشارات عقارية موثوقة ومبنية على فهم عميق للسوق العراقي وخبرة واسعة في المجال.",
  "about.p2":
    "نحرص على تقديم حلول مبتكرة، واستراتيجيات فعالة تحقق أهداف عملائنا وتعزز من جودة مشاريعهم العقارية.",

  "about.feature1.title": "فريق متخصص",
  "about.feature1.desc": "نخبة من المحترفين بخبرة تتجاوز 10 سنوات",

  "about.feature2.title": "استشارات مهنية",
  "about.feature2.desc": "توجيه دقيق لاتخاذ قرارات استثمارية ناجحة",

  "about.feature3.title": "نجاحات مستمرة",
  "about.feature3.desc": "سجل حافل بإنجازات مع عملائنا",

  "about.feature4.title": "خدمة موثوقة",
  "about.feature4.desc": "حرص دائم على الجودة والشفافية",

  "about.button.more": "تعرف علينا أكثر",
  "about.button.download": "تحميل البروفايل",

  // Services Section - Arabic
  "services.sectionTag": "خدماتنا",
  "services.title": "حلول عقارية واستثمارية متكاملة",
  "services.description":
    "نقدم مجموعة من الخدمات التي تغطي مختلف مراحل الاستثمار والتطوير العقاري، بتوجيه من فريق محترف وخبرة تمتد لسنوات في السوق العراقي.",

  "services.item1": "تحليل السوق والاتجاهات",
  "services.item2": "استشارات المستثمرين",
  "services.item3": "التخطيط التسويقي",
  "services.item4": "التطوير التنظيمي",

  // Projects Section - Arabic
  "projects.sectionTag": "مشاريعنا",
  "projects.title": "مشاريع مبتكرة تعكس طموحنا",
  "projects.description":
    "في أفينيو، نركز على تطوير مشاريع عقارية متميزة تعزز من جودة الحياة وتحقق استثمارًا ناجحًا ومستدامًا.",
  "projects.button.all": "عرض جميع المشاريع",
  "projects.pic1": "استكشف جمال وفخامة مشروع",

  // Project 1
  "project1.title": "جادة بغداد",
  "project1.category": "مشروع سكني",
  "project1.location": "بغداد، العراق",
  "project1.status": "مكتمل",
  "project1.area": "1,003,800 متر مربع",
  "project1.units": "200 وحدة",
  "project1.description":
    "يُعد جادة بغداد أول استثمار سعودي في العاصمة بغداد، ويجسد رؤية عمرانية حديثة تجمع بين الرفاهية، والمساحات الخضراء، والموقع الحيوي الذي يجعل منه الوجهة المثالية للحياة المتكاملة.",
  "project1.feature1": "مساحات خضراء",
  "project1.feature2": "موقف سيارات",
  "project1.feature3": "أمن 24/7",
  "project1.feature4": "مسبح",
  "project1.feature5": "منطقة لعب أطفال",

  // Project 2
  "project2.title": "مدينة الاخوة السكنية OCR",
  "project2.category": "مشروع سكني",
  "project2.location": "بغداد، العراق",
  "project2.status": "مكتمل",
  "project2.area": "75,000 متر مربع",
  "project2.units": "150 مكتب",
  "project2.description":
    "يُعد مشروع OCR وجهة استثمارية وحياة راقية في قلب بغداد الجديدة — يجمع بين الموقع المميز، التصاميم العصرية، والتجربة الحضرية المتكاملة.",
  "project2.feature1": "قاعات اجتماعات",
  "project2.feature2": "تكييف مركزي",
  "project2.feature3": "مطاعم",
  "project2.feature4": "مواقف طوابق متعددة",

  // Project 3
  "project3.title": "بلوم فيلج Bloom Village",
  "project3.category": "مشروع سكني",
  "project3.location": "بغداد، العراق",
  "project3.status": "مكتمل",
  "project3.area": "30,000 متر مربع",
  "project3.units": "80 مكتب",
  "project3.description":
    "يُعد مشروع Bloom Village مجتمعاً سكنياً راقياً صُمّم ليمنح سكانه تجربة معيشية فريدة متكاملة.",
  "project3.feature1": "تكنولوجيا حديثة",
  "project3.feature2": "مناطق استراحة",
  "project3.feature3": "كافيتيريا",
  "project3.feature4": "شبكات عالية السرعة",

  // CTA Section - Arabic
  "cta.title": "هل أنت مستعد لتأخذ خطوتك الاستثمارية التالية؟",
  "cta.description":
    "تواصل معنا اليوم واكتشف كيف يمكن لأفينيو أن تساعدك في تحقيق أهدافك العقارية والاستثمارية من خلال حلول مبتكرة وخبرة راسخة.",

  "cta.button.book": "احجز استشارتك الآن",
  "cta.button.download": "تحميل البروفايل التعريفي",

  "cta.contact.call": "اتصل بنا",
  "cta.contact.email": "راسلنا",
  "cta.contact.location": "موقعنا",

  "cta.contact.location.value": "بغداد - العراق",

  // Footer Section - Arabic
  "footer.about.text":
    "أفينيو هي شركة عراقية تأسست عام 2019 متخصصة في تقديم حلول التطوير والاستثمار العقاري، تسعى لبناء مجتمعات حديثة ومشاريع ذات جودة عالية وشراكات مستدامة.",

  "footer.quickLinks.title": "روابط سريعة",
  "footer.quickLinks.home": "الرئيسية",
  "footer.quickLinks.about": "من نحن",
  "footer.quickLinks.services": "خدماتنا",
  "footer.quickLinks.projects": "مشاريعنا",
  "footer.quickLinks.news": "الأخبار",
  "footer.quickLinks.contact": "اتصل بنا",

  "footer.services.title": "خدماتنا",
  "footer.services.item1": "تحليل السوق والاتجاهات",
  "footer.services.item2": "استشارات المستثمرين",
  "footer.services.item3": "التخطيط التسويقي",
  "footer.services.item4": "التطوير الإداري",
  "footer.services.item5": "التقييم العقاري",

  "footer.contact.title": "معلومات التواصل",
  "footer.contact.office": "المكتب الرئيسي",
  "footer.contact.address1":
    "بغداد - القادسية، شارع مجمع الوزراء، قرب الصابئة المندائية.",
  "footer.contact.address2": "العراق",
  "footer.contact.phone": "للاستفسارات العامة",

  "footer.rights": "جميع الحقوق محفوظة.",

  // About Page - Arabic

  // Breadcrumb
  "about.breadcrumb.home": "الرئيسية",
  "about.breadcrumb.about": "من نحن",

  // Hero
  "about.hero.title": "من نحن",
  "about.hero.subtitle":
    "خبرة عراقية رائدة في الاستثمار والتطوير العقاري منذ عام 2019",

  // Story
  "about.story.tag": "قصتنا",
  "about.story.title": "من العراق إلى المستقبل",
  "about.story.p1":
    "تأسست شركة أفينيو للاستثمار والتطوير العقاري في عام 2019، ومنذ انطلاقتها حققت الشركة نموًا ملحوظًا في سوق العقارات العراقي من خلال تقديم خدمات استشارية متكاملة ومشاريع تطوير عقاري نوعية.",
  "about.story.p2":
    "نحن نؤمن أن نجاحنا ينبع من فهمنا العميق للسوق المحلي، ورغبتنا الصادقة في تحسين جودة الحياة، وبناء مجتمعات متكاملة آمنة ومستدامة.",
  "about.story.year": "سنة التأسيس",
  "about.story.projects": "مشاريع ناجحة",
  "about.story.box.title": "ثقة وشراكة",
  "about.story.box.desc": "بخبرات محلية ورؤية عالمية",

  // Vision & Mission
  "about.vm.tag": "رؤيتنا ورسالتنا",
  "about.vm.title": "أسسنا الاستراتيجية",
  "about.vm.subtitle":
    "نلتزم بتقديم مشاريع نوعية واستشارات مهنية تنسجم مع أهداف عملائنا وتخدم التنمية المستدامة",

  "about.vision.title": "رؤيتنا",
  "about.vision.desc":
    "أن نكون المطور العقاري الأكثر ثقة في العراق والمنطقة، من خلال توفير حلول عمرانية مبتكرة، تساهم في تحسين جودة الحياة.",

  "about.mission.title": "رسالتنا",
  "about.mission.desc":
    "تقديم خدمات تطوير واستثمار عقاري شاملة وموثوقة، ترتكز على الابتكار، الجودة، وتحقيق رضا العملاء وتعزيز التنمية الوطنية.",

  // Values
  "about.values.tag": "قيمنا",
  "about.values.title": "الركائز التي نؤمن بها",

  "about.values.item1": "النزاهة",
  "about.values.item1.desc": "نعمل بشفافية وصدق في كل تعاملاتنا",

  "about.values.item2": "التميز",
  "about.values.item2.desc": "نسعى للابتكار وتحقيق أعلى معايير الجودة",

  "about.values.item3": "المسؤولية",
  "about.values.item3.desc": "نلتزم بالمجتمع ونسهم في تنميته",

  "about.values.item4": "الاستدامة",
  "about.values.item4.desc": "نراعي البيئة ونخطط للمستقبل",

  // Leadership
  "about.leaders.tag": "فريق القيادة",
  "about.leaders.title": "قادة الرؤية",
  "about.leaders.subtitle":
    "يقودنا فريق يتمتع بخبرة واسعة ورؤية مستقبلية لبناء بيئة استثمارية رائدة في العراق والمنطقة",

  "about.leaders.ceo.title": "رئيس مجلس الإدارة",
  "about.leaders.ceo.desc":
    "نحن نؤمن بقوة بأن النجاح لا يقاس فقط بالأرقام والإنجازات,هذا ما قاله رئيس مجلس الإدارة, بل أيضا بتأثيرنا الإيجابي على مجتمعنا نحن ملتزمون بخلق قيمة مضافة لمجتمعنا من خلال مبادرات اجتماعية تعكس قيمنا الإنسانية واهتمامنا بالشباب العراقي وبالتنمية المستدامة",

  "about.leaders.vp.title": "نائب رئيس مجلس الإدارة",
  "about.leaders.vp.desc":
    "نعمل بجد لدعم المشاريع والمبادرات التي تساهم في تحسين جودة الحياة سواء عبر المساهمة في التعليم وتطوير المهارات او من خلال المشاركة في برامج بيئية تهدف الى الحفاظ على الموارد الطبيعية وتعزيز الاستدامة . نعتبر ان مسؤوليتنا تمتد الى ما هو ابعد من عملنا اليومي , حيث نحرص على ان تكون انشطتنا التجارية جزءا من كل مشروع نشارك فيه وكل مبادرة ندعمها هي تجسيد لرؤيتنا في بناء مجتمع اقوى واكثر ازدهارا . نحن نضع مصلحة المجتمع في قلب استراتيجياتنا , ونعمل على ان تكون جهودنا مستدامة وذات تاثير إيجابي دائم . من خلال التزامنا , نطمح الى احداث تغيير حقيقي ينعكس على حياة الافراد ويسهم في نمو وتطور بلدنا الحبيب",

  // CTA
  "about.cta.title": "كن جزءًا من التغيير",
  "about.cta.subtitle":
    "تواصل معنا اليوم وابدأ شراكتك الاستثمارية مع شركة أفينيو",
  "about.cta.button": "تواصل معنا",

  // Breadcrumb
  "what.breadcrumb.home": "الرئيسية",
  "what.breadcrumb.current": "خدماتنا",

  // Hero
  "what.hero.title": "خدماتنا",
  "what.hero.subtitle":
    "نقدم حلولاً شاملة ومتكاملة في قطاعات التطوير العقاري والتسويق والاستثمار وإدارة العلاقات.",

  // Section: Overview
  "what.overview.badge": "خدماتنا",
  "what.overview.title": "مجالات عملنا",
  "what.overview.subtitle":
    "نحن نقدم خدمات شاملة في كل مرحلة من مراحل رحلة العقارات",

  // Overview Services Cards Titles
  "what.service1": "تحليل السوق والتخطيط التسويقي",
  "what.service2": "استشارات عقارية واستشارات للمستثمرين",
  "what.service3": "التقييم العقاري",
  "what.service4": "الدورات التدريبية",
  "what.service5": "تحسين الأداء",

  // Section: Methodology
  "what.methodology.badge": "منهجيتنا",
  "what.methodology.title": "كيف نعمل",
  "what.methodology.subtitle":
    "نتبع منهجية علمية ومدروسة في جميع مشاريعنا لضمان تحقيق أفضل النتائج.",

  // Steps
  "what.step1.title": "التخطيط والدراسة",
  "what.step1.desc": "دراسة شاملة للسوق والموقع ووضع خطة استراتيجية مفصلة.",

  "what.step2.title": "التصميم والتطوير",
  "what.step2.desc":
    "تصميم مبتكر يجمع بين الجمال والوظائف العملية والاستدامة.",

  "what.step3.title": "التنفيذ والبناء",
  "what.step3.desc":
    "تنفيذ المشروع وفقاً لأعلى معايير الجودة والسلامة والمواعيد المحددة.",

  "what.step4.title": "التسليم والمتابعة",
  "what.step4.desc":
    "تسليم المشروع وتقديم خدمات ما بعد البيع والصيانة المستمرة.",

  // Section: Detailed Services
  "what.detailed.title": "خدماتنا التفصيلية",
  "what.detailed.subtitle":
    "نقدم ثلاث حزم رئيسية من الخدمات تغطي جميع احتياجات التطوير والتسويق العقاري من البداية حتى ما بعد البيع.",

  // Detailed — Group Titles
  "what.detail.group1": "أولاً: خدمات التطوير العقاري",
  "what.detail.group2": "ثانياً: خدمات التسويق العقاري",
  "what.detail.group3": "ثالثاً: خدمات إضافية داعمة",

  // Detailed — Group 1 Items
  "what.detail1.item1":
    "• دراسة الجدوى العقارية الشاملة تحليل الموقع، الفئة المستهدفة، المنافسين، والفرص الاستثمارية.",
  "what.detail1.item2":
    "• وضع المخطط التجاري للمشروع (Business Plan) تحديد مراحل التطوير، التسعير، العائد المتوقع، واستراتيجيات التمويل.",
  "what.detail1.item3":
    "• تحليل السوق العقاري المحلي والإقليمي جمع البيانات والمقارنة بين المشاريع المنافسة.",
  "what.detail1.item4":
    "• إدارة علاقات المستثمرين والملاك إعداد عروض استثمارية وتقارير أداء شهرية.",
  "what.detail1.item5":
    "• تسويق المبيعات وإدارة CRM ربط نظام المبيعات بإدارة العملاء لضمان متابعة دقيقة من أول استفسار إلى توقيع العقد.",
  "what.detail1.item6":
    "• تصميم الهويّة البصرية والبراندينغ للمشاريع العقارية (اسم المشروع – الشعار – الألوان – السوشال ميديا – الكتيبات – الموقع الإلكتروني).",

  // Detailed — Group 2 Items
  "what.detail2.item1":
    "• استراتيجية تسويقية متكاملة للمشاريع وضع خطة تشمل المحتوى، الإعلانات، الأحداث الميدانية، والعلاقات العامة.",
  "what.detail2.item2":
    "• إدارة السوشال ميديا باحتراف تصميم وتنفيذ محتوى إبداعي (بوستات، ريلز، موشن، قصص تفاعلية).",
  "what.detail2.item3":
    "• إدارة الحملات الإعلانية الرقمية (Meta, Google, TikTok, LinkedIn) تتبّع الأداء، إعادة الاستهداف، وزيادة التحويلات الفعلية.",
  "what.detail2.item4":
    "• التصوير الفوتوغرافي والفيديو العقاري الفاخر تصوير داخلي وخارجي + 3D Render + لقطات درون + إنتاج ريلز دعائية.",
  "what.detail2.item5":
    "• إدارة المبيعات والـ Leads نظام متكامل لتحويل المتابعين إلى زبائن فعليين (Sales Funnel).",
  "what.detail2.item6":
    "• تنظيم المعارض العقارية والإيفنتات من الهوية البصرية للحدث إلى التغطية الإعلامية والتسويق المسبق له.",
  "what.detail2.item7":
    "• خدمة العلاقات العامة والإعلام التواصل مع الصحافة والمؤثرين لتغطية المشاريع ورفع قيمة البراند.",

  // Detailed — Group 3 Items
  "what.detail3.item1":
    "• إعداد عروض PowerPoint وملفات PDF احترافية للمستثمرين.",
  "what.detail3.item2": "• تطوير المواقع الإلكترونية للمشاريع العقارية.",
  "what.detail3.item3": "• خدمات ما بعد البيع وإدارة المقيمين.",
  "what.detail3.item4":
    "• التحليل الشهري للأداء التسويقي والمبيعات (Reports & Insights).",

  /**************************
   * PROJECTS PAGE
   **************************/

  // Breadcrumb
  "projects.breadcrumb.home": "الرئيسية",
  "projects.breadcrumb.current": "مشاريعنا",
  "projects.overview": "نظرة عامة",
  "projects.features": "المميزات",
  "projects.pic": "معرض الصور",
  "projects.pic2": "استكشف جمال وفخامة مشروع",
  "projects.bloom": "بروشورات مشروع بلوم فيلج",
  "projects.bloom2":
    "اكتشف تفاصيل المشروع بشكل أعمق من خلال تصفح وتحميل البروشورات التالية",
  "projects.bloom.brouchure": "البروشور العام",
  "projects.bloom.brouchure2": "بروشور الفلل والمخططات",
  "projects.bloom.brouchure3": "تحميل البروشور",
  "projects.bloom.brouchure4": "مخطط المشروع",

  // Hero
  "projects.hero.title": "مشاريعنا",
  "projects.hero.subtitle":
    "اكتشف مجموعة متنوعة من المشاريع السكنية والتجارية الفاخرة في أفضل مواقع العراق",
  "projects.hero.alt": "مشاريع أفينيو",

  // All Projects Section
  "projects.all.title": "جميع المشاريع",
  "projects.all.button": "عرض التفاصيل",

  // CTA
  "projects.cta.title": "هل تبحث عن منزل أحلامك؟",
  "projects.cta.subtitle":
    "فريقنا من الخبراء جاهز لمساعدتك في العثور على المشروع المثالي الذي يلبي احتياجاتك وتطلعاتك",
  "projects.cta.button": "تواصل معنا",

  // Status
  "projects.list.status.available": "متاح الآن",

  /***************
   * Project 1
   ***************/
  "projects.list.1.title": "جادة بغداد",
  "projects.list.1.type": "سكني",
  "projects.list.1.location": "العراق , بغداد",
  "projects.list.1.desc":
    "مشروع متكامل على مساحة 1,003,800 متر مربع، يتميز بتوازن بين المساحات الخضراء والبناء الحديث. أول استثمار سعودي في بغداد، بموقع استراتيجي قرب نادي الفروسية وكلية الطب البيطري. يجمع بين الرفاهية، والطبيعة، والحياة العصرية.",

  /***************
   * Project 2
   ***************/
  "projects.list.2.title": "مدينة الاخوة السكنية",
  "projects.list.2.type": "سكني",
  "projects.list.2.location": "العراق , بغداد",
  "projects.list.2.desc":
    "مشروع سكني وتجاري راقٍ بموقع متميز بجوار الجامعة الأمريكية وجامعة البيان. يضم شققاً حديثة بمساحات 142 متر مربع و172 متر مربع، وشارعاً رئيسياً بطول 2 كم يحتضن علامات تجارية عالمية. يجمع بين السكن، التسوق، والترفيه في قلب بغداد الجديدة.",

  /***************
   * Project 3
   ***************/
  "projects.list.3.title": "بلوم فيلج",
  "projects.list.3.type": "سكني",
  "projects.list.3.location": "العراق , بغداد",
  "projects.list.3.desc":
    "مجتمع سكني فاخر يوفر فللاً بمساحات تبدأ من 200 متر مربع حتى 1000 متر مربع، مع مرافق متكاملة تشمل ملاعب بادل، مساحات خضراء، نوادٍ رياضية، مسابح، ونادي فروسية. وجهة مثالية لحياة عائلية راقية وسط بيئة متكاملة.",

  /***************
   * Project 4
   ***************/
  "projects.list.4.title": "مجمع النسيم",
  "projects.list.4.type": "مجمع سكني",
  "projects.list.4.location": "بغداد - العراق",
  "projects.list.4.desc":
    "مجمع سكني حديث يوفر بيئة مريحة وخدمات متكاملة للعائلات.",

  /***************
   * Contact
   ***************/
  "contact_breadcrumb_home": "الرئيسية",
  "contact_breadcrumb_page": "تواصل معنا",

  "contact_hero_title": "تواصل معنا",
  "contact_hero_sub":
    "نحن هنا لمساعدتك في العثور على منزل أحلامك أو الإجابة على استفساراتك",

  "contact_section_title_chip": "تواصل معنا",
  "contact_section_title": "كيف يمكنك الوصول إلينا",
  "contact_section_sub":
    "فريقنا المتخصص جاهز لمساعدتك في أي وقت عبر قنوات التواصل المختلفة",

  "contact_info_address_title": "العنوان",
  "contact_info_phone_title": "الهاتف",
  "contact_info_email_title": "البريد الإلكتروني",

  "contact_form_title": "أرسل لنا رسالة",
  "contact_form_sub":
    "املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن",

  "contact_form_name": "الاسم الكامل",
  "contact_form_email": "البريد الإلكتروني",
  "contact_form_subject": "الموضوع",
  "contact_form_message": "الرسالة",

  "contact_form_placeholder_name": "أدخل اسمك الكامل",
  "contact_form_placeholder_email": "أدخل بريدك الإلكتروني",
  "contact_form_placeholder_subject": "موضوع الرسالة",
  "contact_form_placeholder_message": "اكتب رسالتك هنا...",

  "contact_form_submit": "إرسال الرسالة",

  "contact_form_success_title": "تم إرسال رسالتك بنجاح!",
  "contact_form_success_sub": "سنتواصل معك خلال 24 ساعة",

  "contact_map_title": "موقعنا على الخريطة",
  "contact_map_city": "العراق بغداد",
  "contact_map_click": "(انقر لتفعيل الخريطة)",
  "contact_map_lock": "قفل الخريطة",

  "social_chip": "تابعنا",
  "social_title": "ابق على تواصل معنا",
  "social_sub":
    "تابع آخر أخبارنا وتحديثاتنا عبر منصات التواصل الاجتماعي",

  /**************************
   * PROJECT DETAILS PAGE - ARABIC
   **************************/

  // Project 1 - Jadat Baghdad
  "projects.details.jadatbaghdad.title": "جادة بغداد",
  "projects.details.jadatbaghdad.type": "سكني",
  "projects.details.jadatbaghdad.location": "العامرية، بغداد",
  "projects.details.jadatbaghdad.status": "متاح الآن",
  "projects.details.jadatbaghdad.description":
    "يُعد جادة بغداد أول استثمار سعودي في العاصمة بغداد، ويجسد رؤية عمرانية حديثة تجمع بين الرفاهية، والمساحات الخضراء، والموقع الحيوي الذي يجعل منه الوجهة المثالية للحياة المتكاملة.",
  "projects.details.jadatbaghdad.longDescription.1":
    "يمتد مشروع جادة بغداد على مساحة تبلغ 1,003,800 متر مربع، خُصص منها 60٪ للمساحات الخضراء و40٪ للبناء الأفقي والعمودي، ليشكل توازناً مثالياً بين الطبيعة والحياة العصرية.",
  "projects.details.jadatbaghdad.longDescription.2":
    "يقع المشروع في منطقة العامرية مقابل كلية الطب البيطري وبجوار نادي الفروسية، ضمن دائرة تسجيل عقاري العامرية، ويتمتع بموقع استراتيجي يربطه بالطريق الدولي من الشمال، وطريق أبو غريب القديم من الجنوب، وطريق العامرية وحي الجهاد من الشرق.",
  "projects.details.jadatbaghdad.longDescription.3":
    "يُعد جادة بغداد أول استثمار سعودي في العاصمة بغداد، ويجسد رؤية عمرانية حديثة تجمع بين الرفاهية، والمساحات الخضراء، والموقع الحيوي الذي يجعل منه الوجهة المثالية للحياة المتكاملة.",
  "projects.details.jadatbaghdad.feature.1": "60٪ من المشروع مساحات خضراء",
  "projects.details.jadatbaghdad.feature.2": "تصميم عمراني حديث",
  "projects.details.jadatbaghdad.feature.3":
    "موقع استراتيجي في قلب بغداد",
  "projects.details.jadatbaghdad.feature.4": "بجوار نادي الفروسية",
  "projects.details.jadatbaghdad.feature.5": "طرق وصول متعددة",
  "projects.details.jadatbaghdad.feature.6":
    "توازن بين الطبيعة والحياة العصرية",
  "projects.details.jadatbaghdad.location.address": "العامرية، بغداد، العراق",
  "projects.details.jadatbaghdad.nearby.1": "كلية الطب البيطري",
  "projects.details.jadatbaghdad.nearby.2": "نادي الفروسية",
  "projects.details.jadatbaghdad.nearby.3": "الطريق الدولي",
  "projects.details.jadatbaghdad.nearby.4": "حي الجهاد",

  // Project 2 - OCR
  "projects.details.ocr.title": "مدينة الإخوة السكنية OCR",
  "projects.details.ocr.type": "سكني",
  "projects.details.ocr.location": "قرب مطار بغداد الدولي",
  "projects.details.ocr.status": "متاح الآن",
  "projects.details.ocr.description":
    "مشروع OCR يقع في موقع استراتيجي قرب مطار بغداد الدولي، وبجانب جامعتي البيان والجامعة الأمريكية في بغداد، ويضم شارعاً رئيسياً بطول 2 كم يحتضن مجموعة من العلامات التجارية العالمية.",
  "projects.details.ocr.longDescription.1":
    "مشروع OCR يقع في موقع استراتيجي قرب مطار بغداد الدولي، وبجانب جامعتي جامعة البيان والجامعة الأمريكية في بغداد، ويضم شارعاً رئيسياً بطول 2 كم يحتضن مجموعة من العلامات التجارية العالمية. كما يحتوي المشروع على شقق سكنية بمساحات 142 متر مربع و 172 متر مربع، مصمَّمة وفق معايير حديثة تجمع بين الفخامة والعملية.",
  "projects.details.ocr.longDescription.2":
    "يُعد مشروع OCR وجهة استثمارية وحياة راقية في قلب بغداد الجديدة — يجمع بين الموقع المميز، التصاميم العصرية، والتجربة الحضرية المتكاملة. من خلال الدمج بين السكن، التسوق، والترفيه، يوفر المشروع نمط حياة فريد يلبي تطلعات العوائل والمستثمرين على حدّ سواء.",
  "projects.details.ocr.feature.1": "موقع استراتيجي قرب المطار",
  "projects.details.ocr.feature.2": "شارع رئيسي بطول 2 كم",
  "projects.details.ocr.feature.3": "علامات تجارية عالمية",
  "projects.details.ocr.feature.4": "تصاميم عصرية",
  "projects.details.ocr.feature.5": "بيئة متكاملة للسكن والترفيه",

  // Project 3 - Bloom Village
  "projects.details.bloomvillage.title": "بلوم فيلج Bloom Village",
  "projects.details.bloomvillage.type": "سكني",
  "projects.details.bloomvillage.location": "بغداد الجديدة",
  "projects.details.bloomvillage.status": "متاح الآن",
  "projects.details.bloomvillage.description":
    "يُعد مشروع Bloom Village مجتمعاً سكنياً راقياً صُمّم ليمنح سكانه تجربة معيشية فريدة متكاملة بمساحات تبدأ من 200 متر مربع وتصل إلى 1000 متر مربع.",
  "projects.details.bloomvillage.longDescription.1":
    "يُعد مشروع Bloom Village مجتمعاً سكنياً راقياً صُمّم ليمنح سكانه تجربة معيشية فريدة متكاملة. يضم المشروع ست مساحات متنوعة تبدأ من 200 متر مربع وتصل إلى 250 متر مربع، 300 متر مربع، 600 متر مربع، 800 متر مربع، و 1000 متر مربع، ما يُتيح خيارات واسعة تناسب العائلات والمستثمرين على حدّ سواء.",
  "projects.details.bloomvillage.longDescription.2":
    "إلى جانب المساكن، يحتوي Bloom Village على مرافق مميزة مثل ملاعب بادل، مساحات خضراء واسعة، نادي فروسية، مسابح، ونوادي رياضية — كلّها في مكان واحد لتوفير نمط حياة يجمع بين الراحة، الفخامة، والنشاط.",
  "projects.details.bloomvillage.feature.1": "ملاعب بادل",
  "projects.details.bloomvillage.feature.2": "نادي فروسية",
  "projects.details.bloomvillage.feature.3": "مسابح متعددة",
  "projects.details.bloomvillage.feature.4": "نوادي رياضية",
  "projects.details.bloomvillage.feature.5": "مساحات خضراء واسعة",

  // Project 4 - Al Naseem
  "projects.details.alnaseem.title": "مجمع النسيم",
  "projects.details.alnaseem.type": "مجمع سكني",
  "projects.details.alnaseem.location": "بغداد - العراق",
  "projects.details.alnaseem.status": "متاح الآن",
  "projects.details.alnaseem.description":
    "مجمع سكني حديث يوفر بيئة مريحة وخدمات متكاملة للعائلات.",
  "projects.details.alnaseem.longDescription.1":
    "مجمع النسيم مشروع سكني متكامل صُمم ليوفر أسلوب حياة عصري ومريح للعائلات.",
  "projects.details.alnaseem.longDescription.2":
    "يمتاز المشروع بتخطيط حديث، وخدمات أساسية، ومساحات مناسبة لمختلف الاحتياجات.",
  "projects.details.alnaseem.longDescription.3":
    "يركز المشروع على جودة التنفيذ والموقع المناسب وتوفير بيئة آمنة وهادئة للسكن.",
  "projects.details.alnaseem.feature.1": "موقع مميز",
  "projects.details.alnaseem.feature.2": "تصميم حديث",
  "projects.details.alnaseem.feature.3": "خدمات متكاملة",
  "projects.details.alnaseem.feature.4": "مساحات خضراء",
  "projects.details.alnaseem.feature.5": "بيئة سكنية آمنة",
  "projects.details.alnaseem.feature.6": "خيارات متعددة للوحدات",
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isRTL, setIsRTL] = useState(false);

  const t = (key: string): string => {
    const translations = language === "en" ? enTranslations : arTranslations;
    return translations[key] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    setIsRTL(language === "ar");
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;

    if (language === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [language]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};