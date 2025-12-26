'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { getBlogById, getAllBlogs } from '@/lib/blog';
import ArticleViewClient from './ArticleViewClient';


export async function generateStaticParams() {
    const blogs = await getAllBlogs();
    return blogs.map((blog) => ({ id: blog.id }));
}

export async function generateMetadata({ params }) {
    const searchParams = await params;
    const post = await getBlogById(searchParams.id);

    if (!post) {
        return {
            title: 'Blog Not Found',
            robots: { index: false },
        };
    }

    return {
        title: post.title,
        description: post.excerpt || `Read ${post.title}`,
        alternates: {
            canonical: `/blog/${post.id}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.image }],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const searchParams = await params;
    const post = await getBlogById(searchParams.id);

    if (!post) {
        notFound();
    }

    return (
        <>
            <ArticleViewClient post={post} />
            <Footer />
        </>
    );
}
