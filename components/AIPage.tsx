import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Sparkles, Send, Map, BrainCircuit, MessageCircle, Info } from 'lucide-react';
import { Input } from './ui/input';

const AIPage: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState([
    { role: 'ai', text: 'Hello Anna! I am your personal AI learning engine. What are we mastering today?' }
  ]);

  const handleSend = () => {
    if (!prompt.trim()) return;
    setChat([...chat, { role: 'user', text: prompt }]);
    setPrompt("");
    // Mock AI response
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'ai', text: "I've analyzed your request. Based on your skill graph, I recommend starting with Module 4: Concurrent Rendering." }]);
    }, 1000);
  };

  return (
    <div className="pt-28 pb-32 px-6 max-w-7xl mx-auto h-screen flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-2 flex items-center gap-3">
            AI Workspace <Sparkles className="text-blue-500" />
          </h1>
          <p className="text-gray-400 font-medium text-lg">
            Direct interface with state-of-the-art curriculum generation.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-widest">
            <BrainCircuit size={16} /> Mode: Curriculum Sync
          </div>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-3 gap-8 overflow-hidden min-h-0">
        <div className="lg:col-span-2 flex flex-col h-full bg-[#1A1A1C] rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
            {chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-6 rounded-[2rem] text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border-t border-white/5 bg-black/20">
            <div className="relative">
              <Input 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask your tutor anything..."
                className="h-16 bg-[#242426] border-white/5 text-white pl-8 pr-16 rounded-2xl focus:border-blue-500 transition-all placeholder:text-gray-600"
              />
              <button 
                onClick={handleSend}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors">Clear Chat</button>
              <button className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors">Export Roadmap</button>
            </div>
          </div>
        </div>

        <div className="space-y-8 h-full flex flex-col">
          <Card className="rounded-[3rem] bg-[#1A1A1C] border-white/5 flex-1 flex flex-col overflow-hidden">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <Map size={20} className="text-emerald-500" /> Active Path
              </h3>
              <div className="flex items-center gap-2">
                <Info size={16} className="text-gray-600" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {[
                { step: "Module 1", title: "Atomic Design Principles", status: "completed" },
                { step: "Module 2", title: "Advanced State Management", status: "completed" },
                { step: "Module 3", title: "Micro-Frontends with AI", status: "current" },
                { step: "Module 4", title: "Concurrent Rendering", status: "locked" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center group relative">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10 ${
                    item.status === 'completed' ? 'bg-emerald-500 border-emerald-500' : 
                    item.status === 'current' ? 'bg-blue-600 border-blue-600 animate-pulse' : 'bg-transparent border-white/10'
                  }`}>
                    {item.status === 'completed' && <Sparkles size={14} className="text-white" />}
                    {item.status === 'current' && <BrainCircuit size={14} className="text-white" />}
                  </div>
                  {i < 3 && <div className="absolute left-5 top-10 w-[2px] h-8 bg-white/5" />}
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{item.step}</p>
                    <h4 className={`font-bold transition-colors ${item.status === 'locked' ? 'text-gray-600' : 'text-gray-200 group-hover:text-blue-400'}`}>
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 bg-black/20">
              <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-sm hover:bg-white/10 transition-all">
                Recalculate Learning Speed
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIPage;