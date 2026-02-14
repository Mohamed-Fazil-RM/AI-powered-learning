
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
  onNavigateLogin?: () => void;
  onNavigateSignup?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onNavigateLogin, onNavigateSignup }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScrollVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, [lastScrollY]);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('edge');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        scrolled ? 'py-4 glass border-b border-gray-200/50 shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="group-hover:scale-110" size={44} />
          <span className="text-2xl font-black tracking-tight font-display text-gray-900">
            LearnEzily
          </span>
        </div>

        {/* Navigation CTAs */}
        <div className="flex items-center gap-3">
          <a 
            href="#about" 
            onClick={scrollToFeatures}
            className="px-6 py-2.5 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-sm hover:bg-gray-50 hover:shadow-md transition-all active:scale-95 shadow-sm"
          >
            About
          </a>
          <button 
            onClick={onNavigateLogin}
            className="px-6 py-2.5 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-sm hover:bg-gray-50 hover:shadow-md transition-all active:scale-95 shadow-sm"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
