// "use client"; // Because Sidebar uses hooks or interactive links

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <main className="p-4 flex-1 overflow-auto">{children}</main>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-48 bg-gray-900">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
          <div
            onClick={() => setSidebarOpen(false)}
            className="flex-1  bg-opacity-50"
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-2 sm:p-4 flex-1 overflow-auto min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
