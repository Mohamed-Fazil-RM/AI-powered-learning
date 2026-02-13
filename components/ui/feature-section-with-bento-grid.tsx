import React from "react";
import { 
  Calendar, 
  Zap, 
  Plus, 
  ArrowUpRight, 
  Activity,
  Layers
} from "lucide-react";
import { cn } from "../../lib/utils";

export function Feature() {
  return (
    <section id="features" className="w-full py-24 bg-[#F5F5F0]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[950px]">
          
          {/* Column 1: Integrations, Visuals, and Progress */}
          <div className="flex flex-col gap-6 h-full">
            {/* Integrations Card */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-[240px] group hover:shadow-xl transition-all duration-500">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Integrations</h3>
                <p className="text-sm text-gray-500 font-medium leading-snug">Connect with your favorite third party apps seamlessly.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <Calendar size={20} />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                  <Layers size={20} />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                  <Zap size={20} />
                </div>
              </div>
            </div>

            {/* Visual Action Card */}
            <div className="relative rounded-[2rem] overflow-hidden h-[300px] group shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                alt="Student learning"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl font-bold leading-tight">
                  Small modules, <br />big impact on <br />the way!
                </h3>
              </div>
            </div>

            {/* Weekly Journey Card - flex-1 ensures it fills to the bottom */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col flex-1 group hover:shadow-xl transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Journey</h3>
              <p className="text-sm text-gray-500 font-medium mb-8">Adaptive path mapping within 02-03 Weeks.</p>
              <div className="relative flex-1 flex items-center justify-center">
                <div className="absolute right-4 top-2 w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">A</div>
                <div className="absolute left-12 bottom-8 w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">B</div>
                <svg className="w-full h-32 text-blue-100" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M10 80 C 40 10, 160 90, 190 20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: The Main Hero Visual (Tall Center Card) */}
          <div className="relative rounded-[2rem] overflow-hidden lg:h-full group min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Deep Focus"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
            <div className="absolute top-10 left-10">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 shadow-xl flex items-center gap-3">
                <span className="text-gray-900 font-bold text-lg">Adaptive Path.</span>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
               <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-blue-600 transition-all cursor-pointer">
                  <ArrowUpRight size={28} />
               </div>
               <div className="text-right">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Current Focus</p>
                  <p className="text-white text-xl font-bold">Neural Architectures</p>
               </div>
            </div>
          </div>

          {/* Column 3: Skill Tags and Big Stats */}
          <div className="flex flex-col gap-6 h-full">
            {/* Tag Selection Card */}
            <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm h-[280px] flex flex-col justify-center items-start gap-5">
              <div className="px-6 py-2.5 rounded-full border border-purple-200 text-purple-600 font-bold text-sm flex items-center gap-2 hover:bg-purple-50 transition-colors cursor-default">
                Innovative <Plus size={14} />
              </div>
              <div className="px-6 py-2.5 rounded-full bg-purple-100 text-purple-700 font-bold text-sm flex items-center gap-2 cursor-default">
                Revolutionary
              </div>
              <div className="px-6 py-2.5 rounded-full border border-purple-200 text-purple-600 font-bold text-sm flex items-center gap-2 hover:bg-purple-50 transition-colors cursor-default">
                Empowering <Plus size={14} />
              </div>
            </div>

            {/* Large Satisfaction Stat Card - flex-1 ensures it fills to the bottom */}
            <div className="bg-[#EEFADC] rounded-[2rem] p-10 flex flex-col justify-between flex-1 group hover:shadow-xl transition-all duration-500 overflow-hidden relative">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#D9F0B3] flex items-center justify-center text-[#4A7212] group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-1">
                  <span className="text-8xl lg:text-9xl font-black text-[#2D4A06] font-display tracking-tighter leading-none">95%</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A7212] mt-6 mb-2">Knowledge Retention</h3>
                <p className="text-sm text-[#5C8A1B] font-medium leading-relaxed max-w-[280px]">
                  Average improvement in concept recall scores using our spaced-repetition engine across DocHands platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
