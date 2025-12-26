'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import BlogGrid from '@/components/blog/BlogGrid';
import Newsletter from '@/components/Newsletter';
import Connect from '@/components/Connect';
import Footer from '@/components/footer';
import ArticleView from '@/components/ArticleView';

import { ARTICLES } from '@/data/articles';
import SectionReveal from '@/components/ui/SectionReveal';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get('blog');

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (blogId) {
      const post = ARTICLES.find(
        (item) => String(item.id) === String(blogId)
      );
      setSelectedPost(post || null);
    } else {
      setSelectedPost(null);
    }
  }, [blogId]);

  const openPost = (post) => {
    router.push(`/?blog=${post.id}`, { scroll: false });
  };

  const closePost = () => {
    router.push('/', { scroll: false });
  };

  if (selectedPost) {
    return (
      <>
        {/* <Navbar isScrolled={isScrolled} /> */}
        <ArticleView post={selectedPost} onBack={closePost} />
        <Footer />
      </>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <section id="blog" className="min-h-screen py-9 px-8 sm:px-12 lg:px-24 bg-[#050505] flex flex-col justify-center">
        <SectionReveal className=" flex flex-col items-center lg:items-center text-center lg:text-center">
          <h2 className="text-6xl lg:text-9xl font-serif text-center italic text-white tracking-tighter mb-7">
            The Blog.
          </h2>
          {/* <div className="w-24 h-[1px] bg-[#D4AF37] my-8 opacity-30" /> */}
          <p className="text-[#D4AF37] text-[10px] text-center font-black uppercase tracking-[0.8em]">
            Select Archives Volume IV
          </p>
        </SectionReveal>
        <BlogGrid onSelect={openPost} posts={ARTICLES} />
      </section>
      <Newsletter />
      <Connect />
      <Footer />
    </main>
  );
}
