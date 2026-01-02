
import { FileText, ChevronRight, ExternalLink, Clock, TrendingUp, PlusCircle } from 'lucide-react';

export default async function AdminPage() {


  const blogCount = 42;

  return (
    <>
      {/* 4. Page Content */}
      <main className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-end absolute top-25 right-8">
            <a
              href="admin/blogs/new"
              className="flex items-center -2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm shadow-blue-200"
            >
              <PlusCircle size={18} />
              New Post
            </a>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <FileText size={20} />
                </div>
                <span className="text-green-500 text-xs font-medium flex items-center gap-1">
                  <TrendingUp size={12} /> +12%
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500">Total Blog Posts</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{blogCount ?? 0}</p>
            </div>

            {/* Add more stat cards here if needed */}
          </div>


          {/* Management Section */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Recent Blogs</h2>
                <p className="text-sm text-gray-500">Manage and edit your latest content</p>
              </div>
              <div className="flex items-center gap-4">

                <a href="/main/admin/blogs" className="text-sm text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                  View All Posts <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="divide-y divide-gray-50">
              {/* Individual Blog Row */}
              <div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Understanding React Server Components</h4>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1"><Clock size={12} /> Dec 28, 2025</span>
                      <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full uppercase tracking-wider text-[10px]">Published</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a href="/admin/blogs/edit/1" className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all border border-gray-200">
                    Edit
                  </a>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div >
      </main >
    </>
  );
}  