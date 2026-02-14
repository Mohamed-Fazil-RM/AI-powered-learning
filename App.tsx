import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Feature as BentoFeatures } from './components/ui/feature-section-with-bento-grid';
import { FeaturesSectionWithHoverEffects } from './components/ui/feature-section-with-hover-effects';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';
import { StickyFooter } from './components/ui/sticky-footer';
import { RainbowButton } from './components/ui/rainbow-button';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import Dashboard from './components/Dashboard';
import AIPage from './components/AIPage';
import SettingsPage from './components/SettingsPage';
import CourseMaterialsPage from './components/CourseMaterialsPage';
import { AppleStyleDock } from './components/AppleStyleDock';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'login' | 'signup' | 'dashboard' | 'ai' | 'settings' | 'courses'>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('landing');
  };

  if (view === 'login') {
    return <LoginPage onNavigateLanding={() => setView('landing')} onNavigateSignup={() => setView('signup')} onLoginSuccess={handleLoginSuccess} />;
  }

  if (view === 'signup') {
    return <SignupPage onNavigateLanding={() => setView('landing')} onNavigateLogin={() => setView('login')} onSignupSuccess={handleLoginSuccess} />;
  }

  if (view === 'dashboard') {
    return (
      <div className="min-h-screen bg-[#F5F5F0]">
        <Dashboard />
        <AppleStyleDock currentView="dashboard" onNavigate={(v) => setView(v as any)} onLogout={handleLogout} />
      </div>
    );
  }

  if (view === 'ai') {
    return (
      <div className="min-h-screen bg-[#0D0D0E]">
        <AIPage />
        <AppleStyleDock currentView="ai" onNavigate={(v) => setView(v as any)} onLogout={handleLogout} />
      </div>
    );
  }

  if (view === 'settings') {
    return (
      <div className="min-h-screen bg-[#F5F5F0]">
        <SettingsPage />
        <AppleStyleDock currentView="settings" onNavigate={(v) => setView(v as any)} onLogout={handleLogout} />
      </div>
    );
  }

  if (view === 'courses') {
    return (
      <div className="min-h-screen bg-[#F5F5F0]">
        <CourseMaterialsPage />
        <AppleStyleDock currentView="courses" onNavigate={(v) => setView(v as any)} onLogout={handleLogout} />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900 bg-[#F5F5F0]">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-400/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-purple-400/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar 
        scrolled={scrolled} 
        onNavigateLogin={() => setView('login')} 
        onNavigateSignup={() => setView('signup')} 
      />
      
      <main className="relative z-10">
        <Hero onNavigateSignup={() => setView('signup')} />
        
        <section id="edge" className="py-32 md:py-48 bg-transparent border-t border-gray-100/50">
          <div className="max-w-7xl mx-auto px-6 text-center mb-24">
             <h3 className="text-4xl md:text-6xl font-extrabold font-display text-gray-900 tracking-tight leading-none mb-6">
               The LearnEzily Edge
             </h3>
             <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
               Built by educators and AI researchers to solve the most difficult problems in cognitive retention.
             </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </section>

        <BentoFeatures />
        
        <section id="success-stories" className="py-32 md:py-48 bg-[#0A0A0B] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none brightness-50"></div>
          
          <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-20">
            <h2 className="text-5xl md:text-7xl font-extrabold font-display text-white tracking-tight leading-none">
              What Our Students say
            </h2>
            <p className="mt-8 text-gray-400 font-medium text-xl max-w-2xl mx-auto leading-relaxed">
              Join thousands of learners who have accelerated their careers with LearnEzily's AI-driven platform.
            </p>
          </div>

          <div className="relative z-20">
            <StaggerTestimonials />
          </div>

          <div className="mt-32 px-6 max-w-7xl mx-auto relative z-20 mb-12">
            <div className="py-24 px-8 md:px-16 rounded-[4rem] bg-white text-gray-900 text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-gray-100">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-rainbow bg-[length:200%]"></div>
              
              <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -translate-y-1/2 -mr-64 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] -translate-y-1/2 -ml-64 rounded-full"></div>
              
              <h4 className="text-5xl md:text-8xl font-extrabold font-display mb-10 tracking-tighter leading-[0.9] text-gray-900">
                Ready to upgrade <br className="hidden md:block" /> your brain?
              </h4>
              <p className="text-gray-500 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                Start learning smarter, not harder with our adaptive AI engine. Curated paths for the careers of tomorrow.
              </p>
              <div className="flex justify-center">
                <RainbowButton onClick={() => setView('signup')} className="h-20 px-16 text-xl shadow-xl">Try Now For Free</RainbowButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
};

export default App;