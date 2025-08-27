import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    companyName: "Ghadq AlEbda Creative Interiors & Exteriors",
    companyNameArabic: "مؤسسة غدق الإبداع للتصميم الداخلي والخارجي",
    
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Towards Spaces that Reflect Your Taste and Uniqueness",
    
    // Intro Section
    introTitle: "Creating Spaces That Tell Your Story",
    introContent: "At Ghadq AlEbda, we specialize in interior and exterior design, creating spaces that meet your needs and express your personality. From smart planning to fine details, we make every corner tell a story.",
    
    // Features
    feature1: "Innovative design balancing beauty & function",
    feature2: "Use of cutting-edge technology & premium materials",
    feature3: "Personalized consultations for precise execution",
    feature4: "Full project supervision from concept to delivery",
    
    // CTA
    ctaMain: "Start your project with us today – Book your consultation via WhatsApp",
    
    // Services
    servicesTitle: "Our Services to Bring Your Vision to Life",
    interiorDesign: "Interior Design",
    exteriorDesign: "Exterior Design",
    consulting: "Consulting & Planning",
    
    interiorDesc: "Modern & classic designs for living rooms, bedrooms, kitchens. Tailored choices of colors, furniture, and lighting. Smart storage & space optimization.",
    exteriorDesc: "Elegant landscaping & garden layouts. Facade enhancements with practical beauty. Durable, sustainable modern materials.",
    consultingDesc: "Space evaluation & detailed design planning. Innovative proposals for renovation or expansion.",
    
    servicesCta: "Ready to transform your space? Contact us today!",
    
    // About
    aboutTitle: "Our Passion is Designing Spaces that Inspire Your Life",
    aboutContent: "At Ghadq AlEbda Creative Interiors & Exteriors, we combine creativity and technical expertise to turn ideas into reality. From first sketches to final delivery, every project receives full attention. We believe every space has a story – and we're here to tell it with artistry and innovation.",
    
    // Values
    creativity: "Creativity",
    quality: "Quality",
    commitment: "Commitment",
    clientsFirst: "Clients First",
    
    // Contact
    contactTitle: "Let's Start Your Project Today!",
    contactContent: "Have an idea for an interior or exterior project? Reach out to Ghadq AlEbda and we'll get back to you quickly.",
    contactCta: "Send us a message or book your consultation – let's create your dream space.",
    
    // Blog
    blogTitle: "Design Insights & Inspiration",
    articleTitle1: "Top Interior Design Trends",
    articleTitle2: "How to Choose the Perfect Exterior Design for Your Home",
    
    // Contact Info
    phone: "Phone",
    email: "Email",
    location: "Location",
    riyadh: "Riyadh"
  },
  ar: {
    // Header
    companyName: "مؤسسة غدق الإبداع للتصميم الداخلي والخارجي",
    companyNameArabic: "Ghadq AlEbda Creative Interiors & Exteriors",
    
    // Navigation
    home: "الرئيسية",
    services: "خدماتنا",
    about: "عن المؤسسة",
    blog: "المدونة",
    contact: "تواصل معنا",
    
    // Hero Section
    heroTitle: "نحو مساحات تعكس ذوقك وتفردك",
    
    // Intro Section
    introTitle: "نبتكر مساحات تحكي قصتك",
    introContent: "نحن في مؤسسة غدق الإبداع فريق متخصص في التصميم الداخلي والخارجي، نبتكر مساحات تلبي احتياجاتك وتعبّر عن شخصيتك. من التخطيط الذكي إلى التفاصيل الدقيقة، نجعل كل زاوية تحكي قصة.",
    
    // Features
    feature1: "تصميم مبتكر يوازن بين الجمال والوظيفة",
    feature2: "استخدام أحدث التقنيات والمواد",
    feature3: "استشارات شخصية لضمان تنفيذ رؤيتك",
    feature4: "متابعة كاملة من البداية حتى التسليم",
    
    // CTA
    ctaMain: "ابدأ مشروعك معنا اليوم – احجز استشارتك عبر الواتس اب",
    
    // Services
    servicesTitle: "خدماتنا لتجسيد رؤيتك",
    interiorDesign: "التصميم الداخلي",
    exteriorDesign: "التصميم الخارجي",
    consulting: "الاستشارات والتخطيط",
    
    interiorDesc: "تصاميم عصرية وكلاسيكية لغرف المعيشة والنوم والمطابخ. اختيارات مخصصة للألوان والأثاث والإضاءة. حلول ذكية للتخزين وتحسين المساحة.",
    exteriorDesc: "تنسيق حدائق أنيق وتخطيط المساحات الخضراء. تحسينات للواجهات بجمال عملي. مواد عصرية متينة ومستدامة.",
    consultingDesc: "تقييم المساحات والتخطيط التفصيلي للتصميم. اقتراحات مبتكرة للتجديد أو التوسع.",
    
    servicesCta: "هل أنت مستعد لتحويل مساحتك؟ تواصل معنا الآن!",
    
    // About
    aboutTitle: "شغفنا تصميم مساحات تلهم حياتك",
    aboutContent: "في مؤسسة غدق الإبداع للتصميم الداخلي والخارجي، نجمع بين الإبداع والخبرة التقنية لتحويل الأفكار إلى واقع. من الرسوم الأولى إلى التسليم النهائي، كل مشروع يحصل على اهتمام كامل. نؤمن أن لكل مساحة قصة - ونحن هنا لحكيها بفنية وإبداع.",
    
    // Values
    creativity: "الإبداع",
    quality: "الجودة",
    commitment: "الالتزام",
    clientsFirst: "العملاء أولاً",
    
    // Contact
    contactTitle: "دعنا نبدأ مشروعك اليوم!",
    contactContent: "هل لديك فكرة لمشروع تصميم داخلي أو خارجي؟ تواصل مع مؤسسة غدق الإبداع وسنرد عليك بأسرع وقت.",
    contactCta: "أرسل لنا رسالتك الآن أو احجز استشارتك، لنصنع مساحة أحلامك",
    
    // Blog
    blogTitle: "رؤى ووحي في التصميم",
    articleTitle1: "أهم اتجاهات التصميم الداخلي",
    articleTitle2: "كيف تختار التصميم الخارجي المثالي لمنزلك",
    
    // Contact Info
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    riyadh: "الرياض"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Apply font class to body
    document.body.className = document.body.className.replace(/font-\w+/g, '');
    document.body.classList.add(language === 'ar' ? 'font-arabic' : 'font-poppins');
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};