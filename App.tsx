import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Feature as BentoFeatures } from './components/ui/feature-section-with-bento-grid';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';
import Footer from './components/Footer';
import { RainbowButton } from './components/ui/rainbow-button';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900 bg-[#F5F5F0]">
      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-400/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-purple-400/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <BentoFeatures />
        
        {/* Testimonials Section - Standout Dark Theme */}
        <div id="success-stories" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
          {/* Subtle grid or glow for the dark section */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight">
              What Our Students say
            </h2>
            <p className="mt-6 text-gray-400 font-medium text-lg max-w-2xl mx-auto">
              Join thousands of learners who have accelerated their careers with LearnEzily's AI-driven platform.
            </p>
          </div>

          <StaggerTestimonials />

          {/* Call to Action Final */}
          <div className="mt-20 px-6 max-w-7xl mx-auto relative z-10">
            <div className="p-8 md:p-16 rounded-[3rem] bg-white text-gray-900 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
              <h4 className="text-3xl md:text-5xl font-extrabold font-display mb-6 tracking-tight">Ready to upgrade your brain?</h4>
              <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto font-medium">Start learning smarter, not harder with our adaptive AI engine.</p>
              <div className="flex justify-center">
                <RainbowButton>Try Now</RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;