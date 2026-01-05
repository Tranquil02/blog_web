"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import BlogGrid from "@/components/blog/BlogGrid";
import Section from "@/components/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function BlogPage() {
  const router = useRouter();
  // const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchBlogs() {
      try {
        const res = await axios.get('/api/blog/features');
        console.log(res);

        if (isMounted) {
          setData(res.data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load blogs');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div>Loading…</div>;
  if (error) return <div>{error}</div>;
  const { featured, trending, latest, mostViewed } = data;

  const openPost = (post) => {
    router.push(`/blog/${post.id}`, { scroll: false });
  };

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
                {featured?.title}
              </h1>

              <p className="mt-6 max-w-lg text-[var(--text-secondary)]">
                {featured?.excerpt}
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
              {featured?.cover_image && (
                <Image
                  src={featured?.cover_image}
                  alt={featured?.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
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
