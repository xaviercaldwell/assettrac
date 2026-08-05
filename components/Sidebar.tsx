import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex min-w-48 flex-col bg-black p-4 text-white">

      <nav className="flex flex-col gap-2">

        <Link
          className="rounded p-2 text-lg hover:bg-gray-800"
          href="/dashboard/assets"
        >
          Assets
        </Link>

        <Link
          className="rounded p-2 text-lg hover:bg-gray-800"
          href="/dashboard/users"
        >
          Users
        </Link>

      </nav>


      <div className="mt-auto flex flex-col gap-3 text-sm">


  <div className="text-indigo-200">
    Powered by Next.js
  </div>

</div>

    </aside>
  );
}