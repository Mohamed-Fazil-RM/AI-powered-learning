import React from 'react';
import CTAButton from './ui/CTAButton';
import { RainbowButton } from './ui/rainbow-button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSuccess = () => {
    const element = document.getElementById('success-stories');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pb-24 pt-20 md:pt-40 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Content Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-extrabold font-display leading-[1.05] mb-8 tracking-tight text-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Master Any Skill <br />
            <span className="text-gradient">10x Faster</span> <br />
            with Adaptive AI
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Stop wasting time on generic courses. Our AI curates a personalized curriculum just for you based on your goals, pace, and knowledge gaps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <RainbowButton>
              Try Now
              <ChevronRight className="w-5 h-5" />
            </RainbowButton>
            <CTAButton label="See Success Stories" variant="outline" onClick={scrollToSuccess} />
          </div>
        </div>

        {/* Subtle background glow for the centered content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-400/5 blur-[120px] -z-10 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;