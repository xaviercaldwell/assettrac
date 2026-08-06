import UserRow from './UserRow';
import { User } from "@/types/user";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Props{
    users: User[];
}

export default function UserTable({users}: Props){
    return (
        <Table>
            <TableHeader>
                <tr>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                </tr>
            </TableHeader>
            <TableBody>
               
            {users.map(user => (
                <UserRow
                    key={user.id}
                    user={user}
                />
            ))}
            </TableBody>
        </Table>
    )
}