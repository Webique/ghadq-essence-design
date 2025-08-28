import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, CheckCircle, MessageCircle, CreditCard, Star } from 'lucide-react';

const PrivacyPolicy = () => {
  const { language, t } = useLanguage();

  const policies = [
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      text: {
        ar: "التعديل مرتين مجانًا، بدون أي تعديل جوهري.",
        en: "Two free modifications, without any major changes."
      }
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      text: {
        ar: "أي تعديل جوهري إضافي يتم الاتفاق عليه.",
        en: "Any additional major modifications are agreed upon."
      }
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      text: {
        ar: "تواصلنا عبر الواتس اب دائمًا وسريع.",
        en: "Our communication via WhatsApp is always fast and reliable."
      }
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      text: {
        ar: "في حالة إلغاء الخدمة بعد الدفع، لا يتم استرجاع المبلغ.",
        en: "In case of service cancellation after payment, no refund is provided."
      }
    },
    {
      icon: <CreditCard className="w-5 h-5 text-primary" />,
      text: {
        ar: "الدفع عن طريق التحويل لحساب المؤسسة",
        en: "Payment via bank transfer to company account"
      }
    }
  ];

  return (
    <section id="privacy-policy" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {language === 'ar' ? 'سياسة الخصوصية والشروط' : 'Privacy Policy & Terms'}
            </h2>
            <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'مع غدق الإبداع للتصميم الداخلي والخارجي 🌟'
                : 'With Ghadq AlEbda for Interior & Exterior Design 🌟'
              }
            </p>
          </div>

          {/* Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {policies.map((policy, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 rtl:space-x-reverse text-start p-6 card-premium hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  {policy.icon}
                </div>
                <div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {policy.text[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <p className="text-lg text-foreground font-medium mb-6">
              {language === 'ar' 
                ? 'لأي استفسار أو فكرة، راسلنا واحنا جاهزين!'
                : 'For any questions or ideas, contact us and we\'re ready!'
              }
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/966534645312"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 me-2" />
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
