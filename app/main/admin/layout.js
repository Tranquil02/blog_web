
import Sidebar from '../../../components/admin/sidebar';
import Navbar from '../../../components/admin/topbar';
import { requireAdmin } from '../../../lib/auth';


export default async function AdminLayout({ children }) {
  const user = await requireAdmin();
  // console.log(user);

  return (
    // <AdminGuard>
      <div className="min-h-screen bg-[#fff] flex">

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
    // </AdminGuard>
  );
}
