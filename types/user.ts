export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    department: string;
    location: string;
    role: "Admin" | "Technician" | "Viewer";

}