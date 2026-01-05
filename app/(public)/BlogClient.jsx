'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Hero from "@/components/Hero"
import BlogGrid from '@/components/blog/BlogGrid';
import Newsletter from '@/components/Newsletter';
import Connect from '@/components/Connect';
import Footer from '@/components/footer';
import SectionReveal from '@/components/ui/SectionReveal';

export default function BlogClient({ initialBlogs }) {
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
      </section>

      <Connect />
      <Newsletter />
      <Footer />
    </main>
  );
}
