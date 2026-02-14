import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Library, 
  ChevronDown, 
  SlidersHorizontal, 
  ScrollText, 
  Download, 
  Hash, 
  Calendar, 
  Layers, 
  BookOpen, 
  PenTool, 
  GraduationCap, 
  User, 
  Bookmark 
} from 'lucide-react';

type Screen = 'question-bank' | 'digital-library';

const CourseMaterialsPage: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('question-bank');
  const [yearMenuOpen, setYearMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-slate-800">
      {/* Header Section */}
      <header className="bg-[#F5F5F0] border-b border-slate-300/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-black font-display text-slate-900 tracking-tight">Course Materials</h1>
              <p className="text-slate-500 text-sm font-medium mt-1">Access all your academic resources in one place</p>
            </div>
            
            {/* Main Action Switcher */}
            <div className="inline-flex bg-slate-200/50 p-1.5 rounded-2xl shadow-sm border border-slate-300/50">
              <button 
                onClick={() => setActiveScreen('question-bank')} 
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeScreen === 'question-bank' 
                    ? 'bg-white text-blue-700 shadow-sm border border-slate-300/30' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                Question Bank
              </button>
              <button 
                onClick={() => setActiveScreen('digital-library')} 
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeScreen === 'digital-library' 
                    ? 'bg-white text-emerald-700 shadow-sm border border-slate-300/30' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Library className="w-4 h-4" />
                Digital Library
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 pb-32">
        {activeScreen === 'question-bank' && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-[#F5F5F0] p-5 rounded-3xl shadow-sm border border-slate-300/50">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by paper name or subject code (e.g. CS101)..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-100/50 border border-slate-300/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-52">
                  <select className="w-full pl-5 pr-12 py-3.5 bg-slate-100/50 border border-slate-300/30 rounded-2xl text-sm font-bold focus:outline-none text-slate-700 cursor-pointer appearance-none">
                    <option>All Semesters</option>
                    <option>Semester 1</option>
                    <option>Semester 2</option>
                    <option>Semester 3</option>
                    <option>Semester 4</option>
                    <option>Semester 5</option>
                    <option>Semester 6</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <button 
                    onClick={() => setYearMenuOpen(!yearMenuOpen)}
                    className="p-3.5 bg-slate-200/50 text-slate-600 rounded-2xl hover:bg-slate-200 transition-all border border-slate-300/30"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                  </button>
                  
                  {yearMenuOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 z-[60] overflow-hidden animate-in zoom-in duration-200">
                      <div className="px-5 py-3 border-b border-slate-50 bg-slate-50/50">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Year</span>
                      </div>
                      <div className="flex flex-col p-1.5">
                        {['All Years', '2024 Apr', '2024 Nov', '2025 Apr', '2025 Nov'].map((year) => (
                          <button 
                            key={year}
                            onClick={() => setYearMenuOpen(false)}
                            className="px-4 py-2.5 text-sm text-left hover:bg-slate-50 rounded-xl transition-colors text-slate-600 font-bold"
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* List of Papers */}
            <div className="space-y-4">
              {[
                { title: 'Advanced Data Structures', code: 'CS302', date: '2024 NOV', sem: 'SEM 5' },
                { title: 'Theory of Computation', code: 'CS301', date: '2024 NOV', sem: 'SEM 5' },
                { title: 'Database Management Systems', code: 'CS204', date: '2024 APR', sem: 'SEM 4' }
              ].map((paper, i) => (
                <div key={i} className="group bg-[#F5F5F0] p-6 rounded-3xl border border-slate-300/60 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-100/50 text-blue-700 rounded-2xl flex items-center justify-center border border-blue-200/50 shadow-inner group-hover:scale-110 transition-transform">
                      <ScrollText className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight">{paper.title}</h3>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1.5 text-[10px] text-slate-500 uppercase tracking-[0.15em] font-black">
                        <span className="flex items-center gap-1.5"><Hash className="w-3.5 h-3.5" /> {paper.code}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {paper.date}</span>
                        <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> {paper.sem}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-300/30 md:border-t-0 pt-4 md:pt-0">
                    <button className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 rounded-xl transition-all border border-slate-300/40 shadow-sm active:scale-95">View PDF</button>
                    <button className="p-3 text-blue-700 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl transition-all active:scale-90 border border-blue-200/20 shadow-sm">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeScreen === 'digital-library' && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-[#F5F5F0] p-5 rounded-3xl shadow-sm border border-slate-300/50">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search ebooks, journals, research papers..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-100/50 border border-slate-300/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-52">
                  <select className="w-full pl-5 pr-12 py-3.5 bg-slate-100/50 border border-slate-300/30 rounded-2xl text-sm font-bold focus:outline-none text-slate-700 cursor-pointer appearance-none">
                    <option>All Types</option>
                    <option>E-Books</option>
                    <option>Video Lectures</option>
                    <option>Lecture Notes</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                <button className="p-3.5 bg-slate-200/50 text-slate-600 rounded-2xl hover:bg-slate-200 transition-all border border-slate-300/30 shadow-sm" title="Saved Items">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Grid of Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { type: 'E-BOOK', icon: BookOpen, color: 'emerald', title: 'Introduction to Quantum Computing', author: 'Dr. Sarah Jenkins', info: '412 Pages', action: 'Read Now' },
                { type: 'NOTES', icon: PenTool, color: 'amber', title: 'Handwritten Networking Notes', author: 'Prof. Robert', info: '58 Pages', action: 'Open Notes' },
                { type: 'STUDY MATERIAL', icon: GraduationCap, color: 'blue', title: 'Operating Systems Research Paper', author: 'IEEE Publications', info: '24 Pages', action: 'Download' }
              ].map((item, i) => (
                <div key={i} className="group bg-[#F5F5F0] p-8 rounded-[2.5rem] border border-slate-300/60 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all flex flex-col justify-between h-full min-h-[300px]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 bg-${item.color}-100/50 text-${item.color}-700 rounded-2xl flex items-center justify-center border border-${item.color}-200/50 shadow-inner group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-7 h-7" />
                      </div>
                      <span className={`px-3 py-1 bg-${item.color}-100 text-${item.color}-800 text-[10px] font-black rounded-full uppercase border border-${item.color}-200/50 tracking-widest`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-3 leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2.5 text-xs text-slate-500 font-bold">
                        <User className="w-4 h-4 text-slate-300" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-500 font-bold">
                        <FileText className="w-4 h-4 text-slate-300" />
                        <span>{item.info}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-200/50">
                    <button className="flex-1 px-6 py-3 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 rounded-xl transition-all border border-slate-300/30 shadow-sm active:scale-95">
                      {item.action}
                    </button>
                    <button className="p-3 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all active:scale-90 shadow-sm border border-slate-100">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default CourseMaterialsPage;