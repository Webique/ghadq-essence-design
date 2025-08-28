import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simple splash screen that shows for 2 seconds then fades out
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 100);
      }, 800);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#CFD4CE] flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <div className="text-center">
        {/* Logo - Big and Centered */}
        <img 
          src="/images/hello.png" 
          alt="Ghadq AlEbda Logo" 
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
