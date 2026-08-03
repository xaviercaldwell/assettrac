import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    
//should go here only if there isn't a session established. 

    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-32 px-16 ">
        <div className="flex flex-col gap-6 text-center ">
          <h1 className="flex flex-row text-5xl font-bold items-center justify-center gap-2">
            AssetTrac&nbsp;<Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
          </h1>
          <p className="max-w-md text-lg leading-8">
            AssetTrac is a comprehensive asset management system designed to help organizations efficiently track, manage, and yap yap yap
            with even more yappage and yapyap!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row ">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=" invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Login
            </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent bg-foreground text-background hover:bg-[#ccc]  md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
      </main>
    </div>
    
  );
}
