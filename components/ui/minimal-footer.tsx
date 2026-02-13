import React from 'react';
import {
  FacebookIcon,
  GithubIcon,
  Grid2X2Plus,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import Logo from '../Logo';

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const company = [
    { title: 'About Us', href: '#' },
    { title: 'Careers', href: '#' },
    { title: 'Brand assets', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms of Service', href: '#' },
  ];

  const resources = [
    { title: 'Blog', href: '#' },
    { title: 'Help Center', href: '#' },
    { title: 'Contact Support', href: '#' },
    { title: 'Community', href: '#' },
    { title: 'Security', href: '#' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="size-4" />, link: '#' },
    { icon: <GithubIcon className="size-4" />, link: '#' },
    { icon: <InstagramIcon className="size-4" />, link: '#' },
    { icon: <LinkedinIcon className="size-4" />, link: '#' },
    { icon: <TwitterIcon className="size-4" />, link: '#' },
    { icon: <YoutubeIcon className="size-4" />, link: '#' },
  ];

  return (
    <footer className="relative bg-[#F5F5F0] border-t border-gray-200">
      <div className="mx-auto max-w-7xl md:border-x border-gray-200/50 bg-white/30">
        <div className="grid grid-cols-6 gap-8 p-8 md:p-12">
          <div className="col-span-6 flex flex-col gap-6 md:col-span-4">
            <div className="flex items-center gap-3 opacity-80">
              <Logo size={32} />
              <span className="text-xl font-black font-display text-gray-900 tracking-tight">LearnEzily</span>
            </div>
            <p className="text-gray-500 max-w-sm font-mono text-xs md:text-sm text-balance leading-relaxed">
              Empowering human intelligence through adaptive, AI-driven education. Personalized learning for the next generation of innovators.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 rounded-lg border border-gray-200 p-2 transition-all duration-300"
                  target="_blank"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-gray-400 font-bold mb-4 block text-[10px] uppercase tracking-[0.2em]">
              Resources
            </span>
            <div className="flex flex-col gap-2">
              {resources.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-0.5 text-sm font-semibold text-gray-600 duration-200 hover:text-blue-600 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-gray-400 font-bold mb-4 block text-[10px] uppercase tracking-[0.2em]">
              Company
            </span>
            <div className="flex flex-col gap-2">
              {company.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-0.5 text-sm font-semibold text-gray-600 duration-200 hover:text-blue-600 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="flex flex-col justify-between gap-2 py-8">
          <p className="text-gray-400 text-center font-medium text-[11px] uppercase tracking-widest">
            © LearnEzily Platform. All rights reserved {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
