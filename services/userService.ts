import {User} from '@/types/user';

const fakeUsers: User[] = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '555-1234',
        department: 'IT',
        location: 'Office 1',
        role: 'Admin'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phoneNumber: '555-5678',
        department: 'HR',
        location: 'Office 2',
        role: 'Technician'
    },
    {
        id: 3,
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bob.johnson@example.com',
        phoneNumber: '555-9012',
        department: 'Finance',
        location: 'Office 1',
        role: 'Viewer'
    }
];

export async function getUsers(): Promise<User[]> {
    return fakeUsers;
}


//const response await fetch('https://api.example.com/assets');
//return response.json() as Promise<Asset[]>;