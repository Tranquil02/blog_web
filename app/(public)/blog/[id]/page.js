import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ArticleViewClient from './ArticleViewClient';
import axios from 'axios';


// export async function generateStaticParams() {
//   const blogs = await getAllBlogs();
//   return blogs.map((blog) => ({ id: blog.id }));
// }

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await axios.get(
    `${BASE_URL}/api/blog/get/${id}`
  );

  const post = res.data.blog;

  if (!post) {
    return {
      title: 'Blog Not Found',
      robots: { index: false },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}


export default async function BlogPostPage({ params }) {
  const { id } = await params;

  const res = await axios.get(
    `${BASE_URL}/api/blog/get/${id}`
  );

  const post = res.data.blog;
  

  if (!post) notFound();

  return (
    <>
      <ArticleViewClient post={post} />
      <Footer />
    </>
  );
}

