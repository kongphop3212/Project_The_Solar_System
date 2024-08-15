import Link from "next/link";
import Booklist from "./Booklist";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
        <h1 className="font-bold">The Solar System</h1>
        <div className="grow">
          <div className="flex items-center justify-center gap-2 md:gap-8">
            <div>  </div>
          </div>
        </div>
        <div>
          <Link href="/login" className="mr-2 font-bold">
            Sign In
          </Link>
          <Link href="/register" className="font-bold">
            Sign Up
          </Link>
        </div>
      </div>
      <Booklist />
    </div>
  )
}