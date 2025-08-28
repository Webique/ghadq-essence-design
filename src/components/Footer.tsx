import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const quickLinks = [
    {
      key: 'home',
      href: '#home',
      label: {
        ar: 'الرئيسية',
        en: 'Home'
      }
    },
    {
      key: 'services',
      href: '#services',
      label: {
        ar: 'خدماتنا',
        en: 'Services'
      }
    },
    {
      key: 'about',
      href: '#about',
      label: {
        ar: 'من نحن',
        en: 'About Us'
      }
    },
    {
      key: 'contact',
      href: '#contact',
      label: {
        ar: 'تواصل معنا',
        en: 'Contact Us'
      }
    }
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-start">
            <h4 className="text-lg font-semibold text-foreground">
              {language === 'ar' ? 'غدق الإبداع' : 'Ghadq AlEbda'}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ar'
                ? 'نحن نبتكر مساحات تعكس ذوقك وتفردك، من خلال تصميم داخلي وخارجي يجمع بين الأناقة والوظيفة.'
                : 'We create spaces that reflect your taste and uniqueness, through interior and exterior design that combines elegance and functionality.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-start">
            <h4 className="text-lg font-semibold text-foreground">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details */}
          <div className="space-y-4 text-center md:text-start">
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
            <span>© {new Date().getFullYear()}</span>
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