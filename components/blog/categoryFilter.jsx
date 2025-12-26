'use client';
import { CATEGORIES } from '@/data/articles';

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-10">
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-8 py-3 rounded-full uppercase tracking-widest text-xs
            ${active === cat ? 'bg-[#D4AF37] text-black' : 'border text-zinc-600'}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
