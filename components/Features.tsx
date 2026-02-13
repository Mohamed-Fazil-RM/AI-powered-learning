
import React from 'react';
import { BookOpen, Trophy, MessageCircle, BarChart3, Clock, Layout } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Smart Quizzes",
      description: "AI generates questions tailored specifically to your weak spots found during lectures.",
      icon: <BookOpen className="text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Gamified Progress",
      description: "Earn rewards, level up your profile, and compete on global leaderboards to stay motivated.",
      icon: <Trophy className="text-amber-600" />,
      bg: "bg-amber-50"
    },
    {
      title: "24/7 AI Tutor Chat",
      description: "Ask anything, anytime. Our context-aware tutor can explain concepts in 100+ languages.",
      icon: <MessageCircle className="text-emerald-600" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Skill Gap Analysis",
      description: "Visualize exactly what you know and what you need to master to reach your goals.",
      icon: <BarChart3 className="text-purple-600" />,
      bg: "bg-purple-50"
    },
    {
      title: "Micro-learning",
      description: "Curated 5-minute modules for busy professionals who want to learn on the go.",
      icon: <Clock className="text-rose-600" />,
      bg: "bg-rose-50"
    },
    {
      title: "Custom Dashboards",
      description: "An intuitive workspace designed to keep you focused on deep learning.",
      icon: <Layout className="text-indigo-600" />,
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-[#F0F0E8]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">Core Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-gray-900">Everything you need to <span className="text-gradient">succeed.</span></h3>
          </div>
          <p className="text-gray-600 text-lg md:max-w-xs font-medium">
            Unlock professional-grade features powered by state-of-the-art AI models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl group hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-default border border-gray-200/50 hover:border-blue-200">
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all`}>
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{f.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
