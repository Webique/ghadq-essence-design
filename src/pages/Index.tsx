import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import OurWorkSection from '@/components/OurWorkSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <OurWorkSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
