"use client";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { TableRow, TableCell } from "./ui/table";

export default function UserRow({ user }: { user: User }) {
  const router = useRouter();
  return (
    <TableRow
      onClick={() => {
        router.push(`/dashboard/users/${user.id}`);
      }}
      className="cursor-pointer "
    >
      <TableCell className="rounded-l-lg px-2 py-2 ">
        {user.firstName} {user.lastName}
      </TableCell>
      <TableCell className="">{user.email}</TableCell>
      <TableCell className="">{user.role}</TableCell>
      <TableCell className=" rounded-r-lg">&gt;</TableCell>
    </TableRow>
  );
}
