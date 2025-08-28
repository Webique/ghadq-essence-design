import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import OurWorkSection from '@/components/OurWorkSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainContentVisible, setMainContentVisible] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Add a small delay to ensure smooth transition
    setTimeout(() => setMainContentVisible(true), 50);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation is always visible and functional */}
      <Navigation />
      
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div 
          className={`transition-all duration-1000 ease-out ${
            mainContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <main>
            <HeroSection />
            <IntroSection />
            <AboutSection />
            <ServicesSection />
            <OurWorkSection />
            <BlogSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
