"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogGrid from "@/components/blog/BlogGrid";
import { getAllBlogs } from "@/lib/blog";
import Section from "@/components/Section";
import useScrollState from "@/hooks/useScrollState";

export default function BlogPage() {
  const router = useRouter();
  const blogs = getAllBlogs();
  const isScrolled = useScrollState();

  const openPost = (post) => {
    router.push(`/blog/${post.id}`);
  };

  const featured = blogs[0];

  const trending = [...blogs]
    .sort((a, b) => b.likes + b.views - (a.likes + a.views))
    .slice(0, 6);

  const latest = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  const mostViewed = [...blogs]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);

  return (
    <>
      {/* <Navbar isScrolled = {isScrolled} /> */}

      <main className="bg-[var(--bg-primary)] mt-32">

        <section className="relative min-h-[80vh] flex items-center px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
                Featured
              </span>

              <h1 className="mt-4 text-5xl sm:text-6xl font-editorial italic text-[var(--text-heading)] leading-tight">
                {featured.title}
              </h1>

              <p className="mt-6 max-w-lg text-[var(--text-secondary)]">
                {featured.excerpt}
              </p>

              <button
                onClick={() => openPost(featured)}
                className="
                  mt-8 inline-flex items-center gap-3
                  px-6 py-3 rounded-full
                  border border-[var(--border-light)]
                  text-[var(--text-heading)]
                  hover:bg-[var(--text-heading)]
                  hover:text-[var(--bg-primary)]
                  transition
                "
              >
                Read Article →
              </button>
            </div>

            <div className="relative h-[420px] rounded-3xl overflow-hidden group">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--bg-primary)]/40" />
            </div>
          </div>
        </section>

        <div className="px-6 py-32 space-y-40">

          <Section
            title="Trending Now"
            subtitle="Most talked about articles"
          >
            <BlogGrid posts={trending} onSelect={openPost} />
          </Section>

          <Section
            title="Latest Stories"
            subtitle="Fresh perspectives"
          >
            <BlogGrid posts={latest} onSelect={openPost} />
          </Section>

          <Section
            title="Most Read"
            subtitle="Reader favorites"
          >
            <BlogGrid posts={mostViewed} onSelect={openPost} />
          </Section>

        </div>
      </main>

      <Footer />
    </>
  );
}
