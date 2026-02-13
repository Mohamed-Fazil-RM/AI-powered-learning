"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The AI-generated roadmap for Python was exactly what I needed. I'm learning 5x faster than with traditional videos.",
    by: "Alex, Aspiring Software Engineer",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    tempId: 1,
    testimonial: "The 24/7 tutor is a game-changer. I get my complex math questions answered in seconds, not hours.",
    by: "Sarah, Data Science Student",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    tempId: 2,
    testimonial: "I was overwhelmed by AWS before LearnEzily. The adaptive path filtered out what I already knew and focused on my gaps.",
    by: "David, Cloud Architect Intern",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    tempId: 3,
    testimonial: "The instant feedback on quizzes helps me correct my mistakes immediately. My retention has never been higher.",
    by: "Emily, Marketing Professional",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    tempId: 4,
    testimonial: "Finally, a platform that doesn't treat me like a beginner when I already have experience. Truly personalized.",
    by: "Marcus, Senior UX Designer",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    tempId: 5,
    testimonial: "I've saved at least 100 hours of aimless browsing. LearnEzily tells me exactly what to study next.",
    by: "Jessica, Full-stack Student",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    tempId: 6,
    testimonial: "The gamification keeps me coming back. Earning points while mastering React is actually addictive.",
    by: "Ryan, Hobbyist Developer",
    imgSrc: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    tempId: 7,
    testimonial: "The level of depth in the AI explanations is incredible. It explains like I'm five, then deep dives when I'm ready.",
    by: "Chloe, High School Student",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  const zIndex = 20 - Math.abs(position);
  const scale = isCenter ? 1.05 : 1 - Math.abs(position) * 0.12;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out select-none",
        // Center card is bright/light, background cards are dark to contrast with the dark section
        isCenter 
          ? "bg-[#EBEBEB] text-gray-900 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]" 
          : "bg-[#1A1A1C] text-gray-400 border-white/5 hover:border-white/10 opacity-100 grayscale-[0.2] hover:grayscale-0 shadow-xl"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        zIndex: zIndex,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.3) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
          scale(${scale})
        `,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-500/20"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-6 h-16 w-14 bg-gray-100 object-cover object-center rounded-sm pointer-events-none"
        style={{
          boxShadow: isCenter ? "3px 3px 0px #3b82f6" : "3px 3px 0px #333"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-bold leading-tight font-display transition-opacity duration-300",
        isCenter ? "text-gray-900" : "text-gray-300 opacity-80 group-hover:opacity-100"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm font-semibold italic",
        isCenter ? "text-blue-600" : "text-gray-500"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 650 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length - 1) / 2
          : index - testimonialsList.length / 2;
        
        if (Math.abs(position) > 3) return null;

        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-4 z-50">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full border-2",
            "bg-[#1A1A1C] border-white/10 text-white hover:bg-white hover:text-black hover:border-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full border-2",
            "bg-[#1A1A1C] border-white/10 text-white hover:bg-white hover:text-black hover:border-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
