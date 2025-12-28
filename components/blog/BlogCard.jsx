"use client";

import Image from "next/image";
import { User, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ post, onSelect }) {
  return (
    <article
      onClick={() => onSelect(post)}
      className="
        group cursor-pointer relative h-[300px] lg:h-[450px] w-full
        rounded-[3rem] overflow-hidden
        bg-[var(--bg-secondary)]
        border border-[var(--border-light)]
        shadow-2xl
      "
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="
            object-cover grayscale
            opacity-50 group-hover:opacity-100
            group-hover:grayscale-0 group-hover:scale-110
            transition-all duration-1000
          "
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent z-10" />

      <div className="relative h-full p-12 flex flex-col justify-end z-20">
        <div className="transition-transform duration-700 group-hover:-translate-y-4">
          <span
            className="
              text-[10px] font-black uppercase tracking-[0.4em]
              text-[var(--accent-secondary)]
              mb-4 block
            "
          >
            {post.category}
          </span>

          <h3
            className="
              text-2xl lg:text-3xl
              font-editorial italic
              text-[var(--text-heading)]
              leading-tight mb-6
            "
          >
            {post.title}
          </h3>

          <div
            className="
              max-h-0 opacity-0
              group-hover:max-h-40 group-hover:opacity-100
              overflow-hidden
              transition-all duration-700 ease-in-out
            "
          >
            <p
              className="
                text-sm font-light leading-relaxed mb-8 line-clamp-2
                text-[var(--text-secondary)]
              "
            >
              {post.excerpt}
            </p>

            <div
              className="
                flex justify-between items-center
                border-t border-[var(--border-light)]
                pt-6
              "
            >
              <div className="flex items-center gap-3">
                <User size={14} className="text-[var(--accent-secondary)]" />
                <span
                  className="
                    text-[9px] font-black uppercase tracking-widest
                    text-[var(--text-muted)]
                  "
                >
                  {post.author}
                </span>
              </div>

              <Link href={`/blog/${post.id}`} scroll={false}>
                <ArrowUpRight
                  size={24}
                  className="
                    text-[var(--accent-secondary)]
                    group-hover:rotate-45
                    transition-transform duration-500
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
