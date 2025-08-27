import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Home, TreePine, Lightbulb, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'interiorDesign',
      icon: <Home className="w-8 h-8 text-primary" />,
      descKey: 'interiorDesc'
    },
    {
      key: 'exteriorDesign',
      icon: <TreePine className="w-8 h-8 text-primary" />,
      descKey: 'exteriorDesc'
    },
    {
      key: 'consulting',
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      descKey: 'consultingDesc'
    }
  ];

  const handleWhatsAppClick = () => {
    const phone = '966534645312';
    const message = encodeURIComponent('مرحباً، أود الاستفسار عن خدماتكم');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="section-premium py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.key}
              className="card-premium hover-lift text-center p-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold mb-6 text-foreground leading-tight">
                {t(service.key)}
              </h3>

              {/* Service Description */}
              <p className="text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;