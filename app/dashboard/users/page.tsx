import React from 'react'
import {getUsers} from '@/services/userService';
import UserTable from '@/components/UserTable';
export default async function usersPage(){
    const users = await getUsers();

    return (
        <main className="text-black">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <UserTable users={users} />
        </main> 
    )
}
  
