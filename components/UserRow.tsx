import {User} from '@/types/user';

export default function UserRow({user}: {user: User}) {
    return (
        <tr className="hover:bg-indigo-100">
            <td className="py-2 ">{user.firstName} {user.lastName}</td>
            <td className="py-2 ">{user.email}</td>
            <td className="py-2 ">{user.role}</td>
            <td className="py-2 ">
                <p>&gt;</p>
            </td>
        </tr>
    )
};