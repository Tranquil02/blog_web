"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';

const Subscribe = () => (
  <section id="subscribe" className="max-w-[1700px] mx-auto px-6 md:px-12 mb-32 md:mb-56 relative">
    <div className="relative overflow-hidden bg-zinc-950/40 border border-[#D4AF37]/20 rounded-[3rem] md:rounded-[5rem] p-10 md:p-32 text-center shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto space-y-12 md:space-y-16">
        <div className="flex items-center justify-center gap-4 text-[#D4AF37]"><Sparkles size={28} className="animate-pulse" /><span className="text-[12px] md:text-[14px] font-black uppercase tracking-[1em]">The Inner Circle</span></div>
        <h2 className="text-4xl md:text-7xl lg:text-9xl font-serif italic text-white leading-[0.9] tracking-tighter uppercase">Join the Anthology.</h2>
        <p className="text-zinc-500 text-lg md:text-3xl font-light leading-relaxed px-4 md:px-10 italic font-serif">Direct curations delivered to your digital vault.</p>
        <form className="flex flex-col lg:flex-row gap-6 max-w-3xl mx-auto pt-6" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Identity@luxury.com" className="flex-1 bg-black/60 border border-[#D4AF37]/30 rounded-full px-8 md:px-12 py-5 md:py-7 text-white outline-none focus:border-[#D4AF37] transition-all font-serif italic text-xl md:text-2xl" />
          <button className="bg-[#D4AF37] text-black font-black uppercase px-12 md:px-16 py-5 md:py-7 rounded-full hover:bg-white transition-all shadow-2xl cursor-pointer text-xs md:text-sm">Register</button>
        </form>
      </div>
    </div>
  </section>
);

export default Subscribe;