import React from 'react'
import {getUsers} from '@/services/userService';
import UserTable from '@/components/UserTable';
export const dynamic = "force-dynamic";



export default async function usersPage({
    searchParams,
}: {
    searchParams: Promise<{search?:string}>
}) {

    const users = await getUsers();

    const {search} = await searchParams;


    return (
        <UserTable
            users={users}
            initialSearch={search}
        />
    );
}