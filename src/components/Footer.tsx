import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              {language === 'ar' ? 'غدق الإبداع' : 'Ghadq AlEbda'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ar' 
                ? 'نحو مساحات تعكس ذوقك وتفردك'
                : 'Towards Spaces that Reflect Your Taste and Uniqueness'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('home')}
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('services')}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('about')}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('contact')}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{t('phone')}: 0534645312</p>
              <p>{t('email')}: design0msh@gmail.com</p>
              <p>{t('location')}: {t('riyadh')}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span>© {currentYear}</span>
            <span>{language === 'ar' ? 'مؤسسة غدق الإبداع' : 'Ghadq AlEbda'}</span>
            <span>-</span>
            <span className="flex items-center space-x-1 rtl:space-x-reverse">
              <span>{language === 'ar' ? 'صنع بـ' : 'Made with'}</span>
              <Heart className="w-4 h-4 text-primary" />
              <span>{language === 'ar' ? 'في الرياض' : 'in Riyadh'}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;