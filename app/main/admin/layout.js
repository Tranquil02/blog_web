import { requireAdmin } from '@/lib/auth';

export default async function AdminLayout({ children }) {
  await requireAdmin(); // runs ONLY for admin pages

  return <>{children}</>;
}
