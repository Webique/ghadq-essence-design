import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{t('phone')}: +966 53 464 5312</p>
              <p>{t('email')}: design0msh@gmail.com</p>
              <p>{t('location')}: {t('riyadh')}</p>
            </div>
          </div>

          {/* Company Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              {language === 'ar' ? 'معلومات المؤسسة' : 'Company Details'}
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                {language === 'ar' ? 'السجل التجاري' : 'Commercial Registry'}: 1011157669
              </p>
              <p>
                {language === 'ar' 
                  ? 'المملكة العربية السعودية/الرياض'
                  : 'Saudi Arabia/Riyadh'
                }
              </p>
              <p>
                {language === 'ar' ? 'العملة' : 'Currency'}: {language === 'ar' ? 'ريال سعودي' : 'Saudi Riyal'}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="mx-2">{language === 'ar' ? 'مؤسسة غدق الإبداع' : 'Ghadq AlEbda'}</span>
            <span className="mx-2">-</span>
            <span>{language === 'ar' ? 'صنع في الرياض' : 'Made in Riyadh'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;