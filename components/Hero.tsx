
import React from 'react';
import { RainbowButton } from './ui/rainbow-button';
import { ChevronRight, Play } from 'lucide-react';
import { GooeyText } from './ui/gooey-text-morphing';

interface HeroProps {
  onNavigateSignup?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateSignup }) => {
  const handleWatchDemo = () => {
    // Placeholder for demo functionality
    console.log("Watch demo triggered");
  };

  return (
    <section className="relative overflow-hidden min-h-[95vh] flex flex-col justify-center items-center pb-32 pt-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        
        {/* Content Section */}
        <div className="flex flex-col items-center w-full">
          
          {/* Headline Unit - Redesigned for perfect mathematical centering */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-2 gap-x-6 md:gap-x-10 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-extrabold font-display leading-[0.9] tracking-tighter text-gray-900 whitespace-nowrap shrink-0">
              Learn
            </h1>
            
            {/* Morphing part with a more accurate width to prevent left-leaning bias */}
            <div className="relative h-[1.1em] w-full max-w-[90vw] md:w-[750px] flex items-center justify-center md:justify-start">
              <GooeyText 
                texts={["anytime", "anywhere", "on any device"]}
                morphTime={1.2}
                cooldownTime={1.5}
                className="h-full w-full"
                textClassName="text-6xl sm:text-8xl md:text-[10rem] font-extrabold font-display tracking-tighter text-blue-600 leading-[0.9] text-center md:text-left"
              />
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-gray-600 mb-14 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 font-medium px-4">
            The ultimate AI-powered learning platform, <br className="hidden md:block" /> built exclusive for TNC students
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
            <RainbowButton onClick={onNavigateSignup} variant="dark" className="h-20 px-14 text-xl shadow-2xl">
              Get Started Free
              <ChevronRight className="w-6 h-6 ml-2" />
            </RainbowButton>
            
            <RainbowButton 
              variant="light" 
              onClick={handleWatchDemo}
              className="h-20 px-14 text-xl bg-white border border-gray-200 hover:border-transparent before:opacity-0 hover:before:opacity-100 transition-all duration-300"
            >
              <Play className="w-5 h-5 fill-current mr-3" />
              Watch Demo
            </RainbowButton>
          </div>
        </div>

        {/* Enhanced background glow for the centered content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[700px] bg-blue-400/10 blur-[200px] -z-10 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
