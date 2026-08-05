'use client';
import {useRouter} from 'next/navigation';
import {User} from '@/types/user';

export default function UserRow({user}: {user: User}) {
    const router = useRouter();
    return (
        <tr
            onClick={() => {
                router.push(`/dashboard/users/${user.id}`);
            }}
            className="hover:bg-indigo-100 cursor-pointer ">
            <td className="rounded-l-lg px-2 py-2 ">{user.firstName} {user.lastName}</td>
            <td className="py-2 ">{user.email}</td>
            <td className="py-2 ">{user.role}</td>
            <td className="rounded-r-lg  py-2 ">
                <p>&gt;</p>
            </td>
        </tr>
    )
};