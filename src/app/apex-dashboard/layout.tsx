// app/dashboard/layout.tsx

import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen  bg-gray-100">
      {/* Sidebar */}
      <aside className="w-40 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-4 space-y-2">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Back to Home
          </Link>
          <Link
            href="/apex-dashboard"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Try it!
          </Link>
          <Link
            href="/apex-dashboard/dashboard-example"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Example Charts
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-md flex items-center px-6">
          <h2 className="text-lg font-semibold text-gray-800">Apex Charts</h2>
        </header>

        {/* Content with Scroll */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
