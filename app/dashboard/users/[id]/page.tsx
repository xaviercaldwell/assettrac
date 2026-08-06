import React from "react";
import { getUserById } from "@/services/userService";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(Number(id));

  if (!user){
    notFound();
  }
  return (
     <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">User Details</h1>

          <p className="text-muted-foreground">{user.firstName} {user.lastName}</p>
        </div>

        <div className="flex gap-3">
          <Link href={`/dashboard/users/${user.id}/edit`}>
            <Button className="cursor-pointer">Edit User</Button>
          </Link>

          <Button className="cursor-pointer" variant="destructive">
            Delete User
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {user.firstName} {user.lastName}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            
            <div>
              <p className="text-sm text-muted-foreground">First Name</p>

              <p className="font-medium">{user.firstName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Name</p>

              <p className="font-medium">{user.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>

              <p className="font-medium">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>

              <p className="font-mono">{user.phoneNumber}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Department</p>

              <p className="font-medium">{user.department}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Location</p>

              <p className="font-medium">{user.location}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Role</p>

              <p className="font-medium">{user.role}</p>
            </div>

           
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
