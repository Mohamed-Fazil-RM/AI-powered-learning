import React from "react";
import { cn } from "../../lib/utils";
import {
  Terminal,
  Zap,
  DollarSign,
  Cloud,
  Share2,
  HelpCircle,
  ShieldCheck,
  Heart,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Built for Mastery",
      description:
        "Engineered for deep learning, thinkers, and the next generation of innovators who demand precision in their educational tools. We provide the infrastructure for excellence.",
      icon: <Terminal className="w-10 h-10" />,
    },
    {
      title: "Frictionless UI",
      description:
        "A distraction-free workspace that adapts perfectly to your unique learning style, pace, and cognitive preferences. Focus solely on what matters: your growth.",
      icon: <Zap className="w-10 h-10" />,
    },
    {
      title: "Value-Driven Growth",
      description:
        "Access premium AI-powered learning resources at a fraction of the cost of traditional private tutoring or university courses. High-quality education is now accessible to all.",
      icon: <DollarSign className="w-10 h-10" />,
    },
    {
      title: "24/7 AI Availability",
      description: "Our platform never sleeps. Your personal AI tutor is always online, ready to help you overcome any obstacle the moment it arises, day or night.",
      icon: <Cloud className="w-10 h-10" />,
    },
    {
      title: "Adaptive Roadmaps",
      description: "Collaborate with peers or share your progress in real-time. Our paths update dynamically based on your collective speed and individual mastery levels.",
      icon: <Share2 className="w-10 h-10" />,
    },
    {
      title: "Instant Guidance",
      description:
        "Get context-aware answers to your toughest questions in seconds, with deep-dives available for every single technical concept in our vast library.",
      icon: <HelpCircle className="w-10 h-10" />,
    },
    {
      title: "Skill Guarantee",
      description:
        "If you don't master the concept the first time, our AI pivots and works with you using alternative methods and explanations until the knowledge truly sticks.",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "Always Evolving",
      description: "We continuously update our curriculums to stay ahead of industry trends, ensuring you are always learning what's relevant for tomorrow's job market.",
      icon: <Heart className="w-10 h-10" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 w-full max-w-full mx-auto px-4 md:px-8 lg:px-12">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

// Fix: Explicitly define props to avoid "key" property errors when spreading
interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-20 lg:py-28 relative group/feature border-gray-200/60",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-200/40 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-200/40 to-transparent pointer-events-none" />
      )}
      <div className="mb-8 relative z-10 px-10 md:px-14 lg:px-16 text-gray-400 group-hover/feature:text-blue-600 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold mb-4 relative z-10 px-10 md:px-14 lg:px-16 font-display">
        <div className="absolute left-0 inset-y-0 h-8 group-hover/feature:h-12 w-1.5 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-blue-600 transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-3 transition duration-300 inline-block text-gray-900 leading-tight">
          {title}
        </span>
      </div>
      <p className="text-base md:text-lg text-gray-600 relative z-10 px-10 md:px-14 lg:px-16 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
};
