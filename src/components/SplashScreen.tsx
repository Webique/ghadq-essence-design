import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => setTextVisible(true), 500);
    const timer2 = setTimeout(() => setLogoVisible(true), 1500);
    const timer3 = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 100); // Reduced delay for smoother transition
      }, 800); // Fade out duration
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#CFD4CE] flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isFading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
      }`}
    >
      <div className="text-center">
        {/* Company Name Animation */}
        <div className={`transition-all duration-1000 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#444C37] mb-4 font-arabic">
            غدق الإبداع
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#444C37] font-poppins">
            Ghadq AlEbda
          </h2>
        </div>

        {/* Logo/Icon Animation */}
        <div className={`mt-8 transition-all duration-1000 ease-out ${logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto bg-[#878E7C] rounded-full flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#444C37] rounded-full"></div>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-48 md:w-64 mx-auto">
          <div className="w-full bg-[#D8DDD7] rounded-full h-2">
            <div 
              className="bg-[#444C37] h-2 rounded-full transition-all duration-3000 ease-out"
              style={{ width: logoVisible ? '100%' : '0%' }}
            ></div>
          </div>
        </div>

        {/* Tagline */}
        <div className={`mt-8 transition-all duration-1000 ease-out delay-500 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[#444C37] text-lg md:text-xl font-medium">
            {language === 'ar' 
              ? 'نحو مساحات تعكس ذوقك وتفردك'
              : 'Towards Spaces that Reflect Your Taste and Uniqueness'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
