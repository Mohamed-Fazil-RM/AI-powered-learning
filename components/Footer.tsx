
import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-gray-200 bg-[#F5F5F0]/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo size={44} />
              <span className="text-2xl font-black font-display text-gray-900">LearnEzily</span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-8 font-medium">
              Empowering human intelligence through adaptive, AI-driven education. Personalized learning for the next generation of innovators.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900">Platform</h5>
            <ul className="space-y-4 text-sm text-gray-600 font-semibold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">For Teams</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900">Resources</h5>
            <ul className="space-y-4 text-sm text-gray-600 font-semibold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900">Company</h5>
            <ul className="space-y-4 text-sm text-gray-600 font-semibold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
