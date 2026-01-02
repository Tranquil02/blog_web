import { createClient } from '@/lib/supabase/serverOnly';
import EditBlogClient from './blogEdit';
import { notFound } from 'next/navigation';

export default async function EditBlogPage({ params }) {
  const supabase = await createClient();
  const {id}= await params;


  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  console.log('PARAM ID:',id);
  console.log('BLOG:', blog);
  console.log('ERROR:', error);

  // if (error || !blog) notFound();

  return <EditBlogClient blog={blog} />;
}
