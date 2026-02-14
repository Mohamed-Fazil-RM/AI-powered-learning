import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Moon, 
  Sun,
  Star,
  X,
  MessageSquare
} from 'lucide-react';
import { Badge } from './ui/badge';

const FeedbackModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[500px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10" /> {/* Spacer */}
            <h2 className="text-3xl font-black font-display text-center text-[#E03DF5]">Send Feedback</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
              <X size={24} />
            </button>
          </div>
          
          <p className="text-gray-500 text-center font-medium mb-10">We'd love to hear your thoughts, suggestions, or issues!</p>
          
          <div className="flex justify-center gap-2 mb-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <button 
                key={star} 
                onClick={() => setRating(star)}
                className={`transition-transform hover:scale-110 active:scale-95 ${rating >= star ? 'text-amber-400' : 'text-gray-300'}`}
              >
                <Star size={36} fill={rating >= star ? 'currentColor' : 'none'} strokeWidth={1.5} />
              </button>
            ))}
          </div>
          
          <textarea 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            className="w-full h-32 p-6 bg-gray-50 border border-gray-200 rounded-2xl resize-none text-gray-700 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all mb-10"
          />
          
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={onClose}
              className="px-8 py-4 text-gray-900 font-black uppercase tracking-widest text-xs hover:text-blue-600 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                alert("Thank you for your feedback!");
                onClose();
              }}
              className="px-10 py-4 bg-[#E03DF5] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-purple-500/20 hover:scale-105 transition-all active:scale-95"
            >
              Send Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('orange');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const colors = [
    { id: 'orange', class: 'bg-orange-400' },
    { id: 'purple', class: 'bg-purple-600' },
    { id: 'teal', class: 'bg-teal-400' },
    { id: 'blue', class: 'bg-blue-600' },
    { id: 'gradient', class: 'bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500' },
  ];

  return (
    <div className="pt-28 pb-48 px-6 max-w-[700px] mx-auto min-h-screen">
      <h1 className="text-4xl font-black font-display text-gray-900 mb-12">Settings</h1>

      <div className="space-y-12">
        {/* APPEARANCE */}
        <section>
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Appearance</h2>
          <Card className="rounded-[2rem] border-gray-100 overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-50">
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Dark Mode</h3>
                  <p className="text-sm text-gray-500 font-medium">Switch between dark and light themes</p>
                </div>
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}
                >
                  <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}>
                    {darkMode ? <Moon size={12} className="text-gray-900" /> : <Sun size={12} className="text-amber-500" />}
                  </div>
                </button>
              </div>
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Accent Color</h3>
                  <p className="text-sm text-gray-500 font-medium">Choose your brand color</p>
                </div>
                <div className="flex items-center gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setAccentColor(color.id)}
                      className={`w-8 h-8 rounded-full transition-all hover:scale-110 active:scale-95 ${color.class} ${accentColor === color.id ? 'ring-2 ring-offset-4 ring-gray-900' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* ACCOUNT */}
        <section>
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Account</h2>
          <Card className="rounded-[2rem] border-gray-100 overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-50">
              <button className="w-full p-8 flex items-center justify-between group hover:bg-gray-50 transition-colors">
                <span className="text-lg font-bold text-gray-900">Edit Profile</span>
                <ChevronRight className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </button>
              <button className="w-full p-8 flex items-center justify-between group hover:bg-gray-50 transition-colors">
                <span className="text-lg font-bold text-gray-900">Export Data</span>
                <Download className="text-gray-400 group-hover:text-gray-900 transition-colors" size={20} />
              </button>
            </div>
          </Card>
        </section>

        {/* ABOUT */}
        <section>
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">About</h2>
          <Card className="rounded-[2rem] border-gray-100 overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-50">
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Version</h3>
                  <p className="text-sm text-gray-500 font-medium">You are using the latest stable build</p>
                </div>
                <Badge variant="outline" className="font-mono text-gray-400 px-3 py-1 rounded-lg border-gray-100">v2.4.0</Badge>
              </div>
              <button 
                onClick={() => setIsFeedbackOpen(true)}
                className="w-full p-8 flex items-center justify-between group hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-900">Feedback</span>
                <ExternalLink className="text-gray-400 group-hover:text-gray-900 transition-colors" size={20} />
              </button>
            </div>
          </Card>
        </section>
      </div>

      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
  );
};

export default SettingsPage;