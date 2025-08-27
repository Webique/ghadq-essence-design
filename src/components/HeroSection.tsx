import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-architecture.webp';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Interior Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Company Names */}
        <div className="mb-8 opacity-100">
          <div className="text-sm md:text-base text-muted-foreground mb-2 font-arabic">
            {t('companyNameArabic')}
          </div>
          <div className="text-sm md:text-base text-muted-foreground font-poppins">
            {t('companyName')}
          </div>
        </div>

        {/* Main Hero Title */}
        <h1 className="text-hero mb-8 opacity-100">
          {t('heroTitle')}
        </h1>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-bronze mx-auto opacity-100"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;