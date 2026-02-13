import { Brain, MessageSquare, BarChart, BookOpen } from "lucide-react";
import { Badge } from "./badge";

function Feature() {
  return (
    <div id="features" className="w-full py-20 lg:py-40 bg-[#F0F0E8]/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="default">Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left text-gray-900 font-display">
                Everything you need to succeed.
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left font-medium">
                Unlock professional-grade features powered by state-of-the-art AI models to accelerate your learning journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Feature - Large */}
            <div className="bg-white border border-gray-200 rounded-3xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalized AI Roadmaps</h3>
                <p className="text-gray-600 max-w-md text-base font-medium">
                  Our core engine analyzes your goals and knowledge gaps to build a dynamic learning path that evolves with every lesson.
                </p>
              </div>
            </div>

            {/* AI Tutor - Small */}
            <div className="bg-white border border-gray-200 rounded-3xl aspect-square p-8 flex justify-between flex-col shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7 AI Tutor</h3>
                <p className="text-gray-600 text-base font-medium">
                  Ask questions, clarify doubts, and get instant explanations in over 100 languages at any hour.
                </p>
              </div>
            </div>

            {/* Gap Analysis - Small */}
            <div className="bg-white border border-gray-200 rounded-3xl aspect-square p-8 flex justify-between flex-col shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <BarChart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Skill Gap Analysis</h3>
                <p className="text-gray-600 text-base font-medium">
                  Visualize your expertise levels across different domains and identify exactly what needs more attention.
                </p>
              </div>
            </div>

            {/* Smart Quizzes - Large */}
            <div className="bg-white border border-gray-200 rounded-3xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col shadow-sm hover:shadow-xl hover:border-pink-200 transition-all group">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Adaptive Quizzes & Quests</h3>
                <p className="text-gray-600 max-w-md text-base font-medium">
                  Experience testing that adapts to your speed. Gain experience points and rewards as you master complex topics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };