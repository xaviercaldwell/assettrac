import UserRow from './UserRow';
import { User } from "@/types/user";

interface Props{
    users: User[];
}

export default function UserTable({users}: Props){
    return (
        <table className="table-auto w-full text-left">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <UserRow
                    key={user.id}
                    user={user}
                />
            ))}
            </tbody>
        </table>
    )
}