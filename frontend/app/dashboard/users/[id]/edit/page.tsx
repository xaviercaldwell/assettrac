import { getUserById } from "@/services/userService";
import { notFound } from "next/navigation";
import EditUserForm from "@/components/EditUserForm";

export default async function EditUserPage({
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
        <div>
            <h1>Edit User</h1>

            <EditUserForm user={user} />
        </div>
    );
}