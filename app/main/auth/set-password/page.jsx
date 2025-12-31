'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function SetPassword() {
  const supabase = createClient();
  const router = useRouter();
  const [password, setPassword] = useState('');

  const submit = async () => {
    const { error } = await supabase.auth.updateUser({ password });
    if (!error) router.replace('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-[360px] p-6 bg-zinc-900 rounded-xl">
        <h1 className="text-white mb-4">Set Password</h1>
        <input
          type="password"
          className="w-full mb-4 p-2 bg-zinc-950 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submit} className="w-full bg-white text-black py-2">
          Save Password
        </button>
      </div>
    </div>
  );
}
