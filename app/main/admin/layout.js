
import AdminGuard from '../../../components/admin/adminGuard';
import Sidebar from '../../../components/admin/sidebar';
import Navbar from '../../../components/admin/topbar';


export default async function AdminLayout({ children }) {


  return (
    <AdminGuard>
      <div className="min-h-screen bg-[#f8fafc] flex">

        <Sidebar />

        {/* 2. Content Wrapper */}
        <div className="flex-1 flex flex-col">

          <Navbar email={"prashant"} />

          {/* 4. Page Content */}
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </AdminGuard>
  );
}
