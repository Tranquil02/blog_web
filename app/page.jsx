'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import BlogGrid from '@/components/blog/BlogGrid';
import Newsletter from '@/components/Newsletter';
// import Subscribe from '@/components/SubscribeSection/SubscribeSection';
import Connect from '@/components/Connect';
import Footer from '@/components/footer';
import SectionReveal from '@/components/ui/SectionReveal';

import { ARTICLES } from '@/data/articles';
import useScrollState from '@/hooks/useScrollState';
import LocomotiveProvider from '@/Provider/Locomotiveprovider';

export default function Home() {
  const router = useRouter();
  const isScrolled = useScrollState();

  const openPost = useCallback((post) => {
    router.push(`/blog/${post.id}`, { scroll: false });
  }, [router]);

  return (
    // <LocomotiveProvider>
      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* <Navbar isScrolled={isScrolled} /> */}

        <Hero />

        <section
          id="blog"
          className="
          min-h-screen
          py-16
          px-6
          sm:px-12
          lg:px-24
          bg-[var(--bg-secondary)]
          flex
          flex-col
          justify-center
        "
        >
          <SectionReveal className="flex flex-col items-center text-center mb-16">
            <h2
              className="
              font-serif
              italic
              tracking-tighter
              text-[var(--text-heading)]
              text-5xl
              sm:text-7xl
              lg:text-9xl
              mb-6
            "
            >
              The Blog.
            </h2>

            <p
              className="
              text-[var(--accent-secondary)]
              text-[10px]
              font-black
              uppercase
              tracking-[0.8em]
            "
            >
              Select Archives Volume IV
            </p>
          </SectionReveal>

          <BlogGrid onSelect={openPost} posts={ARTICLES} />
        </section>

        {/* <Subscribe /> */}
        <Connect />
        <Newsletter />
        <Footer />
      </main>
    // </LocomotiveProvider>
  );
}
