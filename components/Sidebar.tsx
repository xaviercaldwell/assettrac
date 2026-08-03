import React from "react";
import "@/app/globals.css";
import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="flex min-w-32 flex-col p-4 text-white">

      <nav className="flex flex-col gap-2">

        <Link className="hover:bg-indigo-600 p-2 rounded" href="/dashboard/assets">
          Assets
        </Link>

        <Link className="hover:bg-indigo-600 p-2 rounded" href="/dashboard/users">
          Users
        </Link>
      </nav>


      <div className="mt-auto text-sm text-indigo-200">
        Powered by Next.js
      </div>

    </aside>
  );
}