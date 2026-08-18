import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "@/app/globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AssetTrac",
  description:
    "AssetTrac is a core portfolio piece for Xavier Caldwell to show proficiency in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}`}>
    
      <body className="min-h-screen antialiased">
          {children}
      </body>
    </html>
  );
}