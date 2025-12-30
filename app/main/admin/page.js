import { requireAdmin } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';

export default async function AdminPage() {
  // 🔐 Protect route (server-side)
  const user = await requireAdmin();

  const supabase = createClient();

  // Optional: fetch some admin stats
//   const { count: blogCount } = await supabase
//     .from('blogs')
//     .select('*', { count: 'exact', head: true });

  return (
    <main style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600 }}>
        Admin Dashboard
      </h1>

      <p style={{ marginTop: '8px', color: '#6b7280' }}>
        Logged in as <strong>{user.email}</strong>
      </p>

      <section style={{ marginTop: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 500 }}>
          Overview
        </h2>

        <div style={{ marginTop: '16px' }}>
          <p>Total blogs: {blogCount ?? 0}</p>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 500 }}>
          Actions
        </h2>

        <ul style={{ marginTop: '12px', lineHeight: 1.8 }}>
          <li>
            <a href="/admin/blogs">Manage Blogs</a>
          </li>
          <li>
            <a href="/admin/blogs/new">Create New Blog</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
