import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST() {
  const supabase = await createClient();

  let {error} =await supabase.auth.signOut();
  if(error){
    return error;
  }
  return NextResponse.json({ success: true });
}
