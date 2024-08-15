"use client";

import Bookinfo from "./Bookinfo";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  
  const { data: session } = useSession();

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
        <button
          onClick={() => signOut()}
          className="mr-2 font-bold"
        >
          Sign Out
        </button>
        </div>
      </div>
      <Bookinfo />
    </div>
  );
}
