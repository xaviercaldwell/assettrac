
namespace assettrac.api.models;

public enum UserRole
{
   
        Admin,
        Technician,
        Viewer
    
}

public class User
{
    public int Id {get;set;}
    public string FirstName {get;set;}= "";
    public string LastName {get;set;}= "";
    public string Email {get;set;}= "";
    public string PhoneNumber {get;set;}= "";
    public string Department {get;set;}= "";
    public string Location {get;set;}= "";
    
    public UserRole Role {get;set;}
    
}

/*  id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    department: string;
    location: string;
    role: "Admin" | "Technician" | "Viewer";
*/