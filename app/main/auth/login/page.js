import { redirect } from 'next/navigation';
import { createReadOnlyClient } from '@/lib/supabase/server-readonly';
import LoginForm from './LoginForm';

export default async function LoginPage() {
  const supabase = await createReadOnlyClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  if (user) {
    redirect('/admin');
  }

  
  return <LoginForm />;
}
