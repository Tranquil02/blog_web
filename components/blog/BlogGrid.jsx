import SectionReveal from "../ui/SectionReveal";
import BlogCard from "./BlogCard";
import Link from "next/link";

const BlogGrid = ({ onSelect, posts }) => {
  const blogArticles = Array.isArray(posts) ? posts : [];
  console.log(blogArticles)


  return (
    <>
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-8">
          {blogArticles.length > 0 ? (

            blogArticles.map((post, i) => (
              <SectionReveal key={post.id} delay={i * 10}>
                <BlogCard post={post} onSelect={onSelect} />
              </SectionReveal>
            ))

          ) : <h2 className="m-auto text-3xl">No Blogs to show</h2>
          }
        </div>
      </div>

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
    </>
  );
};

export default BlogGrid;
