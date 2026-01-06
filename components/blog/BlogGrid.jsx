import SectionReveal from "../ui/SectionReveal";
import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  const blogArticles = Array.isArray(posts) ? posts : [];
  // console.log(blogArticles)


  return (
    <>
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-8">
          {blogArticles.length > 0 ? (

            blogArticles.map((post, i) => (
              <SectionReveal key={post.id} delay={i * 10}>
                <BlogCard post={post} />
              </SectionReveal>
            ))

          ) : <h2 className="m-auto text-3xl">No Blogs to show</h2>
          }
        </div>
      </div>

    </>
  );
};

export default BlogGrid;
