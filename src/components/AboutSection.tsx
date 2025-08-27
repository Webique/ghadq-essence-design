import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Award, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'creativity', icon: <Sparkles className="w-6 h-6 text-primary" /> },
    { key: 'quality', icon: <Award className="w-6 h-6 text-primary" /> },
    { key: 'commitment', icon: <Heart className="w-6 h-6 text-primary" /> },
    { key: 'clientsFirst', icon: <Users className="w-6 h-6 text-primary" /> },
  ];

  return (
    <section id="about" className="section-premium py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-bronze mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="text-center mb-16">
            <p className="text-premium text-xl leading-relaxed max-w-3xl mx-auto">
              {t('aboutContent')}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.key}
                className="text-center p-6 card-premium hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t(value.key)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;