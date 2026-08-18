import GlobalNav from "@/components/GlobalNav";
import Sidebar from "@/components/Sidebar";
import { Geist, Geist_Mono } from "next/font/google";
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

      <div className="flex flex-1 bg-foreground">
        <Sidebar />

        <main className="flex-1 bg-background p-8 text-foreground border rounded-tl-lg rounded-bl-lg ">
          {children}
        </main>
      </div>
    </div>
  );
}