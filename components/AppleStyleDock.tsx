import React from 'react';
import {
  LayoutDashboard,
  Sparkles,
  BarChart3,
  BookMarked,
  Settings,
  LogOut,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';

interface AppleStyleDockProps {
  currentView: 'dashboard' | 'ai' | 'settings' | 'courses';
  onNavigate: (view: 'dashboard' | 'ai' | 'landing' | 'settings' | 'courses') => void;
  onLogout: () => void;
}

export function AppleStyleDock({ currentView, onNavigate, onLogout }: AppleStyleDockProps) {
  const data = [
    {
      id: 'dashboard',
      title: 'Home',
      icon: (
        <LayoutDashboard className={`h-full w-full transition-colors ${currentView === 'dashboard' ? 'text-white' : 'text-gray-500'}`} />
      ),
      onClick: () => onNavigate('dashboard'),
    },
    {
      id: 'ai',
      title: 'Workspace',
      icon: (
        <Sparkles className={`h-full w-full transition-colors ${currentView === 'ai' ? 'text-white' : 'text-gray-500'}`} />
      ),
      onClick: () => onNavigate('ai'),
    },
    {
      id: 'courses',
      title: 'Courses',
      icon: (
        <BookMarked className={`h-full w-full transition-colors ${currentView === 'courses' ? 'text-white' : 'text-gray-500'}`} />
      ),
      onClick: () => onNavigate('courses'),
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: (
        <BarChart3 className='h-full w-full text-gray-500' />
      ),
      onClick: () => {}, 
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: (
        <Settings className={`h-full w-full transition-colors ${currentView === 'settings' ? 'text-white' : 'text-gray-500'}`} />
      ),
      onClick: () => onNavigate('settings'),
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: (
        <LogOut className='h-full w-full text-red-500' />
      ),
      onClick: onLogout,
    },
  ];

  return (
    <div className='fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-4 pointer-events-none'>
      <div className="pointer-events-auto">
        <Dock 
          className='bg-white/95 border border-gray-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-2xl'
          panelHeight={72}
          magnification={92}
          distance={160}
        >
          {data.map((item, idx) => {
            const isActive = currentView === item.id;
            return (
              <DockItem
                key={idx}
                className={cn(
                  'transition-all duration-300 group',
                  isActive ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'hover:bg-gray-100/80'
                )}
              >
                <button 
                  onClick={item.onClick} 
                  className="w-full h-full flex items-center justify-center outline-none"
                >
                  <DockLabel>
                    {item.title}
                  </DockLabel>
                  <DockIcon>
                    {item.icon}
                  </DockIcon>
                </button>
              </DockItem>
            );
          })}
        </Dock>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
