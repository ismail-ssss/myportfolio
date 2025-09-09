import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">MyPortfolio Admin</h1>
      <nav className="flex flex-col gap-3">
        <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
          Overview
        </Link>
        <Link
          href="/dashboard/projects"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Projects
        </Link>
        <Link
          href="/dashboard/visitors"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Visitors
        </Link>
        <Link
          href="/dashboard/settings"
          className="hover:bg-gray-700 p-2 rounded"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
}
