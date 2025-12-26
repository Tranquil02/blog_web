"use client";

import React, { useState, useEffect } from 'react';
import { 
  Gem, 
  Search, 
  Menu, 
  X, 
  ArrowRight 
} from 'lucide-react';

const Navbar = ({ onArticleBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll detection for background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Links Data
  const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'contact us', href: '/connect' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/85 backdrop-blur-2xl py-4 border-b border-[#D4AF37]/20 shadow-2xl' 
            : 'py-6 lg:py-12'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Desktop Left Navigation */}
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="hover:text-[#D4AF37] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Central Brand Identity */}
          <div 
            className="flex flex-col items-center cursor-pointer group" 
            onClick={() => {
              if (onArticleBack) onArticleBack();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-9 h-9 lg:w-11 lg:h-11 mb-1">
              <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-full group-hover:border-[#D4AF37] transition-all duration-700" />
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center group-hover:scale-75 transition-transform duration-700">
                <Gem size={16} className="text-black" />
              </div>
            </div>
            <span className="text-[11px] font-black tracking-[0.9em] ml-[0.9em] text-white hidden sm:block uppercase font-serif italic">
              Midnight
            </span>
            <span className="text-[9px] font-black tracking-[0.5em] ml-[0.5em] text-white sm:hidden uppercase">
              MIDNIGHT
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 lg:gap-10">
            {/* <button className="hidden sm:block p-2 text-zinc-500 hover:text-white transition-colors">
              <Search size={20} />
            </button> */}
            <button 
              className="px-5 lg:px-10 py-2 lg:py-3 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all shadow-xl active:scale-95"
            >
              Subscribe
            </button>
            
            {/* Mobile Hamburger */}
            <button 
              className="lg:hidden text-[#D4AF37] p-2" 
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[110] bg-black transition-transform duration-700 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-10 h-full flex flex-col justify-center items-center gap-12 text-center relative">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-8 right-8 text-[#D4AF37] hover:rotate-90 transition-transform duration-300"
          >
            <X size={32} />
          </button>
          
          <div className="space-y-8">
            {['Archives', 'Essays', 'Blog', 'Connect', 'Subscribe'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-5xl font-serif italic text-white hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700">
             <span>Volume IV Edition</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;