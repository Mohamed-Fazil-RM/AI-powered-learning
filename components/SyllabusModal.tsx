import React from 'react';
import { X, Sparkles, CheckCircle2, Share2 } from 'lucide-react';
import { RainbowButton } from './ui/rainbow-button';

interface SyllabusModalProps {
  topic: string;
  content: string;
  onClose: () => void;
}

const SyllabusModal: React.FC<SyllabusModalProps> = ({ topic, content, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-[#F5F5F0] border border-gray-200 rounded-[2.5rem] flex flex-col max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="p-8 border-b border-gray-200 flex items-center justify-between bg-white/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
              <Sparkles />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-display leading-none mb-1 text-gray-900">Your {topic} Roadmap</h2>
              <p className="text-sm text-gray-500 font-semibold tracking-wide">Customized 4-Week AI Learning Path</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-none">
            {content.split('\n').map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              if (line.startsWith('###') || line.startsWith('Week')) {
                return <h3 key={idx} className="text-xl font-bold text-blue-700 mt-6 mb-3 first:mt-0 font-display">{line.replace('###', '').trim()}</h3>;
              }
              if (line.startsWith('-')) {
                return (
                  <div key={idx} className="flex items-start gap-3 mb-3 group">
                    <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{line.replace('-', '').trim()}</span>
                  </div>
                );
              }
              return <p key={idx} className="text-gray-600 mb-4 leading-relaxed font-medium">{line}</p>;
            })}
          </div>

          <div className="mt-12 p-8 rounded-[2rem] bg-white border border-gray-200 text-center shadow-sm">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Want to save this roadmap?</h4>
            <p className="text-sm text-gray-600 mb-6 font-medium">Create a free account to track your progress, take quizzes, and earn badges for this syllabus.</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <RainbowButton className="h-12 px-6 text-sm">Try Now</RainbowButton>
              <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm font-bold text-sm h-12">
                <Share2 size={18} />
                Share Path
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-white/50 flex justify-center items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Engine v4.2 • Precision Confidence 98.4%
        </div>
      </div>
    </div>
  );
};

export default SyllabusModal;