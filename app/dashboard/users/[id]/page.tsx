import React from 'react'
import {getUserById} from '@/services/userService';

export default async function page({params}: {params: Promise<{id:string}>}) {
    const {id} = await(params);
const user = await getUserById(Number(id));
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
        <h2 className="text-xl font-semibold">{user?.firstName} {user?.lastName}</h2>
        <p>{user?.email}</p>
        <p>{user?.phoneNumber}</p>
        <p>{user?.department}</p>
    </div>
  )
}
