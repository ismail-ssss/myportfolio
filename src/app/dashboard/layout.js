"use client"; // Because Sidebar uses hooks or interactive links

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
