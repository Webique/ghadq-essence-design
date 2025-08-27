import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: t('phone'),
      value: '0534645312',
      href: 'tel:+966534645312'
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: t('email'),
      value: 'design0msh@gmail.com',
      href: 'mailto:design0msh@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: t('location'),
      value: t('riyadh'),
      href: '#'
    }
  ];

  const handleWhatsAppClick = () => {
    const phone = '966534645312';
    const message = encodeURIComponent('مرحباً، أود حجز استشارة للتصميم الداخلي والخارجي');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section-premium py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('contactTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-8"></div>
            <p className="text-premium text-xl max-w-2xl mx-auto">
              {t('contactContent')}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a 
                key={index}
                href={info.href}
                className="card-premium hover-lift text-center p-8 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {info.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {info.value}
                </p>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-xl mb-8 text-foreground font-medium max-w-2xl mx-auto">
              {t('contactCta')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-hero text-lg px-8 py-4 hover-lift"
              >
                <MessageCircle className="w-5 h-5 me-2" />
                WhatsApp
              </Button>
              
              <Button 
                variant="outline"
                className="btn-ghost-bronze text-lg px-8 py-4 hover-lift"
                onClick={() => window.open('mailto:design0msh@gmail.com')}
              >
                <Mail className="w-5 h-5 me-2" />
                {t('email')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;