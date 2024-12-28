import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            CNC Tool Planner
          </h2>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/tools"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Tools
          </Link>
          <Link
            href="/dashboard/projects"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Projects
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
