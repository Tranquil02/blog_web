import { requireAdmin } from '@/lib/auth';
import Sidebar from '../../../components/admin/sidebar';
import Navbar from '../../../components/admin/topbar';

export default async function AdminLayout({ children }) {
  const user = await requireAdmin(); // runs ONLY for admin pages 

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      
      <Sidebar />

      {/* 2. Content Wrapper */}
      <div className="flex-1 flex flex-col">
        
        <Navbar email={user.email} />

        {/* 4. Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
