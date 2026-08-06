'use client';
import {useRouter} from 'next/navigation';
import {User} from '@/types/user';
import { TableRow, TableCell } from './ui/table';

export default function UserRow({user}: {user: User}) {
    const router = useRouter();
    return (
        <TableRow 
            onClick={() => {
                router.push(`/dashboard/users/${user.id}`);
            }}
            className="cursor-pointer ">
            <TableCell className="rounded-l-lg px-2 py-2 ">{user.firstName} {user.lastName}</TableCell>
            <TableCell className="py-2 ">{user.email}</TableCell>
            <TableCell className="py-2 ">{user.role}</TableCell>
            <TableCell className="rounded-r-lg  py-2 ">
                &gt;
            </TableCell>
        </TableRow>
    )
};