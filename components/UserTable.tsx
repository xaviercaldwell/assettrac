"use client";
import UserRow from "./UserRow";
import { User } from "@/types/user";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Props {
  users: User[];
  initialSearch?: string;
}

export default function UserTable({ users, initialSearch }: Props) {
  const [search, setSearch] = useState(initialSearch ?? "");
  useEffect(() => {
    setSearch(initialSearch ?? "");
  }, [initialSearch]);
  const filteredUsers = users.filter((user) => {
  const searchTerms = search
    .toLowerCase()
    .trim()
    .split(/\s+/);

  const searchableText = `
    ${user.firstName}
    ${user.lastName}
    ${user.email}
    ${user.phoneNumber ?? ""}
    ${user.location}
    ${user.role}
    ${user.department}
  `.toLowerCase();

  return searchTerms.every((term) =>
    searchableText.includes(term)
  );
});

  return (

    <div className="space-y-4">
         <div className="max-w-xl">
<Input
                placeholder="Search users..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-12 text-base text-xl px-4 rounded-lg"
            /></div>
    <Table>
      <TableHeader>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </tr>
      </TableHeader>
      <TableBody>
        {filteredUsers.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </TableBody>
    </Table>
  </div>
  );
}
