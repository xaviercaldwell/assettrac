import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
//later redirect to dashboard if logged in.
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">

      <main className="flex w-full max-w-3xl flex-col items-center gap-12 px-8 text-center">

        <div className="flex flex-col gap-6">

          <h1 className="text-5xl font-bold">
            AssetTrac
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">
            AssetTrac is a comprehensive asset management system designed to
            help organizations efficiently track, manage, and maintain their
            IT assets. YAP YAP YAP YAP YAP and a little bit o yappage and more yap to eat your time away and test long text line to make sure its centered ayyayayay
          </p>

        </div>


        <div className="flex flex-col gap-4 mt-4 sm:flex-row">

          <Link href="/login">
            <Button size="lg">
              Login
            </Button>
          </Link>


          <Link href="/register">
            <Button
              size="lg"
              variant="outline"
            >
              Register
            </Button>
          </Link>

        </div>

      </main>

    </div>
  );
}