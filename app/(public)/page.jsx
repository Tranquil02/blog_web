import { getAllBlogs } from '@/lib/blog';
import HomeClient from './HomeClient';

export default async function Home() {
  const blogs = await getAllBlogs(); // server fetch

  return <HomeClient initialBlogs={blogs} />;
}
