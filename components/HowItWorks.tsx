
import React from 'react';
import { Target, Map, Activity } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Input Goals",
      description: "Tell the AI what you want to learn, your current experience, and your availability.",
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Map className="w-8 h-8 text-purple-600" />,
      title: "Adaptive Path",
      description: "Our core engine builds a dynamic roadmap that adjusts in real-time as you progress.",
      gradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: <Activity className="w-8 h-8 text-pink-600" />,
      title: "Real-time Feedback",
      description: "Get instant corrections and quiz adjustments based on your learning speed.",
      gradient: "from-pink-50 to-rose-50"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">The AI Element</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-display text-gray-900">How LearnEzily Works</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/80 p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
              
              <div className="mt-8 flex items-center justify-center w-8 h-8 rounded-full border border-gray-100 text-xs font-bold text-gray-400">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
