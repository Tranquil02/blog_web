'use client';

import Image from 'next/image';
import { User, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogCard({ post, onSelect }) {
  return (
    <article
      onClick={() => onSelect(post)}
      className="group cursor-pointer relative h-[300px] lg:h-[450px] w-full 
                 rounded-[3rem] overflow-hidden bg-zinc-900 
                 border border-white/5 shadow-2xl"
    >
      {/* Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover grayscale 
                     opacity-50 group-hover:opacity-100
                     group-hover:grayscale-0 group-hover:scale-110 
                     transition-all duration-1000"
          priority={false}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t 
                      from-black via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative h-full p-12 flex flex-col justify-end z-20">
        <div className="transform transition-transform duration-700 group-hover:-translate-y-4">

          <span className="text-[10px] font-black text-[#D4AF37] 
                           uppercase tracking-[0.4em] mb-4 block">
            {post.category}
          </span>

          <h3 className="text-2xl lg:text-3xl font-serif italic 
                         text-white leading-tight mb-6">
            {post.title}
          </h3>

          <div className="max-h-0 opacity-0 
                          group-hover:max-h-40 group-hover:opacity-100 
                          overflow-hidden transition-all duration-700 ease-in-out">
            <p className="text-zinc-400 text-sm font-light 
                          leading-relaxed mb-8 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex justify-between items-center 
                            border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <User size={14} className="text-[#D4AF37]" />
                <span className="text-[9px] font-black tracking-widest 
                                 text-zinc-600 uppercase">
                  {post.author}
                </span>
              </div>

              <Link href={`/blog/${post.id}`} scroll={false}>
                <ArrowUpRight
                  size={24}
                  className="text-[#D4AF37] 
                           group-hover:rotate-45 
                           transition-transform duration-500"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
