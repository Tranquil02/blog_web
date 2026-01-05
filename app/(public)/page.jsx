import { getAllBlogs } from '@/lib/blog';
import BlogClient from './BlogClient';

export default async function Home() {
  const blogs = await getAllBlogs(); // server fetch

  return <BlogClient initialBlogs={blogs} />;
}
