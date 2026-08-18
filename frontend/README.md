This is a work in progress project being done to refresh my coding skills and to create a project with which I can proudly show off as part of a more professional portfolio. 

AssetTrac is a full-stack IT asset management application designed to help organizations track, manage, and maintain their technology assets and the users they are assigned to.

The goal of the project is to build a practical, enterprise-style application that demonstrates full-stack development, relational data management, authentication, authorization, and secure application design.

Planned Features
Asset Management:
Create, view, update, and delete IT assets
Track asset tags, manufacturers, models, serial numbers, status, locations, purchase dates, and notes
View detailed information for individual assets

User Management:
Maintain a list of organization users
View assets assigned to individual users
Associate assets with users through relational database relationships

Dashboard:
Provide an overview of the organization's assets
Display asset statistics and relevant system information

Search & Filtering:
Search assets by identifying information
Filter assets by status, user, location, and other relevant attributes

Authentication & Authorization:
Integrate enterprise authentication through Microsoft Entra ID
Implement role-based access control
Restrict functionality based on user permissions

Database Integration:
Store application data in SQL Server/Azure SQL
Use Entity Framework Core for database access
Maintain relationships between assets and users

Security & Reliability:
Validate user input
Implement server-side authorization
Handle errors and invalid requests appropriately
Follow secure application development practices
Technology

The application is being developed with:
Next.js
React
TypeScript
Tailwind CSS
ASP.NET Core
Entity Framework Core
SQL Server / Azure SQL
Microsoft Entra ID

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started for viewing

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
