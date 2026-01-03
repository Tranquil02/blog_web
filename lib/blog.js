
import { createClient } from '@/lib/supabase/serverOnly';

// Fetch all published blogs
export async function getAllBlogs() {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('blogs')
    .select(`
      id,
      title,
      excerpt,
      content,
      cover_image,
      slug,
      views,
      reading_time,
      status,
      published_at
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Supabase getAllBlogs error:', error)
    return []
  }

  return data.map(blog => ({
    ...blog,
    id: String(blog.id),
  }))
}


export async function getBlogById(id) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Supabase getBlogById error:', error)
    return null
  }

  return {
    ...data,
    id: String(data.id),
  }
}


export async function getLatesBlog() {
  const supabase = createClient()

  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(6)

  return data ?? []
}

export async function getTrendingBlogs(limit = 6) {
  const supabase = createClient()

  const { data, error } = await supabase
    .rpc('get_trending_blogs', { limit_count: limit })

  if (error) {
    console.error('Trending error:', error)
    return []
  }

  return data
}



