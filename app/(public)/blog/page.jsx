"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import BlogGrid from "@/components/blog/BlogGrid";
import Section from "@/components/Section";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedBlogs } from "../../../lib/api/blog";

export default function BlogPage() {
  const router = useRouter();

   const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["featured-blogs"],
    queryFn: fetchFeaturedBlogs,
  });

  if (isLoading) {
    return <div className="min-h-screen grid place-items-center">Loading…</div>;
  }

  if (isError) {
    return (
      <div className="min-h-screen grid place-items-center text-red-500">
        {error?.message || "Failed to load blogs"}
      </div>
    );
  }

  console.log(data)
  const { featured, trending=[], latest=[], mostViewed=[] } = data;

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
                  priority
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
            <BlogGrid posts={trending} />
          </Section>

          <Section
            title="Latest Stories"
            subtitle="Fresh perspectives"
          >
            <BlogGrid posts={latest} />
          </Section>

          <Section
            title="Most Read"
            subtitle="Reader favorites"
          >
            <BlogGrid posts={mostViewed} />
          </Section>

        </div>
      </main>

      <Footer />
    </>
  );
}
