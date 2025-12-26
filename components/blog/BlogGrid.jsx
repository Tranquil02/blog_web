import { ARTICLES } from '@/data/articles';
import SectionReveal from '../ui/SectionReveal';
import { ArrowUpRight, User } from 'lucide-react';
import BlogCard from './BlogCard';
import Link from 'next/link';

const BlogGrid = ({ onSelect, posts }) => {
  const BlogArticles = posts.slice(0, 6);
  return (
    <>
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header Section */}


        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-8">
          {BlogArticles.map((post, i) => (
            <SectionReveal key={post.id} delay={i * 100}>
              <BlogCard
                post={post}
                onSelect={onSelect}
                priority={i < 3}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link
          className="relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/30 rounded-2xl backdrop-blur-md bg-white/5 transition-all duration-300 ease-out hover:bg-white hover:text-black hover:shadow-[0_12px_40px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:translate-y-0"
          href="/blog"
        >
          View More
        </Link>

      </div>
    </>
    // </section>
  );
};

export default BlogGrid;