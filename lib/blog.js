import { ARTICLES } from '@/data/articles';

// Fetch all blog posts
export function getAllBlogs() {
  if (!Array.isArray(ARTICLES)) {
    console.error('ARTICLES is not an array:', ARTICLES);
    return [];
  }

  return ARTICLES.map((post) => ({
    ...post,
    id: String(post.id),
  }));
}

export async function getBlogById(id) {
  return (
    ARTICLES.find((post) => String(post.id) === String(id)) || null
  );
}
