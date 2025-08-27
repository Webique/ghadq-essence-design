import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Award, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const { language, t } = useLanguage();

  const values = [
    { key: 'creativity', icon: <Sparkles className="w-6 h-6 text-primary" /> },
    { key: 'quality', icon: <Award className="w-6 h-6 text-primary" /> },
    { key: 'commitment', icon: <Target className="w-6 h-6 text-primary" /> },
    { key: 'clientsFirst', icon: <Users className="w-6 h-6 text-primary" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('aboutContent')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={value.key} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {t(value.key)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;