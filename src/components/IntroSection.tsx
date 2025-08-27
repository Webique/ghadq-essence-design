import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle } from 'lucide-react';

const IntroSection = () => {
  const { t } = useLanguage();

  const features = [
    { key: 'feature1', icon: <CheckCircle className="w-5 h-5 text-primary" /> },
    { key: 'feature2', icon: <CheckCircle className="w-5 h-5 text-primary" /> },
    { key: 'feature3', icon: <CheckCircle className="w-5 h-5 text-primary" /> },
    { key: 'feature4', icon: <CheckCircle className="w-5 h-5 text-primary" /> },
  ];

  const handleWhatsAppClick = () => {
    const phone = '966534645312';
    const message = encodeURIComponent('مرحباً، أود الاستفسار عن خدمات التصميم الداخلي والخارجي');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="section-premium py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            {t('introTitle')}
          </h2>

          {/* Content */}
          <p className="text-premium mb-12 max-w-3xl mx-auto">
            {t('introContent')}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={feature.key}
                className="flex items-start space-x-4 rtl:space-x-reverse text-start p-6 card-premium hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    {t(feature.key)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-hero text-base md:text-lg px-4 md:px-8 py-3 md:py-4 hover-lift w-full md:w-auto max-w-sm md:max-w-none mx-auto"
          >
            <MessageCircle className="w-5 h-5 me-2" />
            <span className="whitespace-normal text-center leading-tight">
              {t('ctaMain')}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;