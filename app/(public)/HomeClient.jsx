'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Hero from "@/components/Hero"
import BlogGrid from '@/components/blog/BlogGrid';
import Newsletter from '@/components/Newsletter';
import Connect from '@/components/Connect';
import Footer from '@/components/footer';
import SectionReveal from '@/components/ui/SectionReveal';
import Link from 'next/link';

export default function HomeClient({ initialBlogs }) {
  const { data: blogs, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data } = await axios.get('/api/blogs/getAll');
      return data;
    },
    initialData: initialBlogs,
    staleTime: 60_000,
  });

  if (error) {
    return <p className="text-red-500">Failed to load blogs</p>;
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Hero />

      <section
        id="blog"
        className="min-h-screen py-16 px-6 sm:px-12 lg:px-24 bg-[var(--bg-secondary)]"
      >
        <SectionReveal className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl sm:text-7xl lg:text-9xl italic">
            The Blog.
          </h2>
        </SectionReveal>

        <BlogGrid posts={blogs} />
        <div className="flex justify-center mt-16">
          <Link
            href="/blog"
            className="
            relative inline-flex items-center justify-center
            px-6 py-3
            text-base font-semibold
            text-[var(--text-heading)]
            border border-[var(--border-light)]
            rounded-2xl
            backdrop-blur-md
            bg-[var(--bg-secondary)]/40
            transition-all duration-300 ease-out
            hover:bg-[var(--text-heading)]
            hover:text-[var(--bg-primary)]
            hover:shadow-[0_12px_40px_rgba(255,255,255,0.35)]
            hover:-translate-y-0.5
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--text-heading)]/70
            active:translate-y-0
          "
          >
            View More
          </Link>
        </div>
      </section>

      <Connect />
      <Newsletter />
      <Footer />
    </main>
  );
}
