// app/layout.tsx
import { DashboardHeader } from "./components/header";
import Sidebar from "./components/sidebar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Panel Layout",
  description: "Header + Centered Sidebar + Content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {/* Header */}
        <DashboardHeader />

        {/* Centered Layout */}
        <div className="flex justify-center mt-4">
          <div className="w-[80%] flex gap-6">
            {/* Sidebar with fixed wider width */}
            <div className="w-72">
              <Sidebar />
            </div>

            {/* Children Content fills remaining space */}
            <main className="flex-1 bg-white p-6 rounded shadow">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
