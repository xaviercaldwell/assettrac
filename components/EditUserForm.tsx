"use client";

import { User } from "@/types/user";
import { updateUser } from "@/services/userService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUserById } from "@/services/userService";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
interface Props {
  user: User;
}

export default function EditUserForm({ user }: Props) {
  const router = useRouter();
const [role, setRole] = useState<User["role"]>(user.role);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updatedUser = {
  ...user,
  firstName: formData.get("firstName") as string,
  lastName: formData.get("lastName") as string,
  email: formData.get("email") as string,
  phoneNumber: formData.get("phoneNumber") as string,
  department: formData.get("department") as string,
  location: formData.get("location") as string,
  role,
};
    await updateUser(user.id, updatedUser);
    console.log("User updated:", updatedUser); // fake data so its hard to see my changes
    console.log(getUserById(user.id)); //ensure changes were made
    router.push(`/dashboard/users/${user.id}`);
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>

        <Input id="firstName" name="firstName" defaultValue={user.firstName} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>

        <Input id="lastName" name="lastName" defaultValue={user.lastName} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>

        <Input id="email" name="email" type="email" defaultValue={user.email} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>

        <Input
          id="phoneNumber"
          name="phoneNumber"
          defaultValue={user.phoneNumber}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>

        <Input
          id="department"
          name="department"
          defaultValue={user.department}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>

        <Input id="location" name="location" defaultValue={user.location} />
      </div>

      <div className="space-y-2">
  <Label htmlFor="role">Role</Label>

  <Select value={role} onValueChange={(value) => setRole(value as User["role"])}>
    <SelectTrigger id="role"className="w-full">
      <SelectValue placeholder="select a role" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="Admin">Admin</SelectItem>
      <SelectItem value="Technician">Technician</SelectItem>
      <SelectItem value="Viewer">Viewer</SelectItem>
    </SelectContent>
  </Select>
</div>

      <div className="flex gap-3">
        <Button type="submit">Save Changes</Button>

        <Link href={`/dashboard/users/${user.id}`}>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
}
