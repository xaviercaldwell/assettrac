import Link from "next/link";
import { Button } from "@/components/ui/button";

function GlobalNav() {
  return (
    <header className="border-b border-gray-500 bg-black text-white z-20">
      <div className="flex items-center justify-between p-4 px-5 shadow-xl">
        <Link href="/dashboard" className="text-2xl font-extrabold">
          AssetTrac
        </Link>

        <div className="flex gap-3">
          <Link href="/dashboard">
          <Button className="cursor-pointer" variant="secondary">
            Dashboard
          </Button>
          </Link>

         <Link href="/profile">
          <Button className="cursor-pointer"variant="secondary">
            Profile
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default GlobalNav;