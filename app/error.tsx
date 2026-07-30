'use client';
import Link from 'next/link';



export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold mb-4">Oops!</h1>
                <p className="text-xl mb-2">Something went wrong</p>
                <p className="text-lg">
                    The page you're looking for doesn't exist or an error occurred.
                </p>
                <Link href="/" className="inline-block px-6 py-2 rounded-lg transition-colors">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}