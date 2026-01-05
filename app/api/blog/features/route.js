import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const supabase =await  createClient();

  const [
    featuredRes,
    trendingRes,
    latestRes,
    mostViewedRes
  ] = await Promise.all([
       supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(1)
      .single(),

    supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('views', { ascending: false })
      .order('likes', { ascending: false })
      .limit(6),

    supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(6),

    supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('views', { ascending: false })
      .limit(6),
  ]);

  if (
    featuredRes.error ||
    trendingRes.error ||
    latestRes.error ||
    mostViewedRes.error
  ) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    featured: featuredRes.data,
    trending: trendingRes.data,
    latest: latestRes.data,
    mostViewed: mostViewedRes.data,
  });
}
