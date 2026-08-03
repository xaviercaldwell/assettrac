import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import GlobalNav from "@/components/GlobalNav";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">

      <GlobalNav />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 rounded-tl-3xl rounded-bl-3xl bg-foreground  p-8">
          {children}
        </main>
      </div>

    </div>
  );
}
