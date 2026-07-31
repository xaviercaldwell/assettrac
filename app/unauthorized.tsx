 import Link from 'next/link';
export default function Unauthorized() {
  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <p>Please 
        <Link href="/login" className="font-medium">
        log in 
        </Link>
        to access this page.</p>
    </main>
  )
}