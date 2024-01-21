'use client'

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

type NavBarProps = {};

export default function NavBar({}: NavBarProps) {

  const { user, isLoaded } = useUser();

  return (
    <nav className="ml-5 mr-5 mt-5 mb-5">
      <ul className="flex justify-end">
        <li className="flex items-center">
          <Link href="/">Home</Link>
        </li>
        <li className="flex items-center ml-5">
          <Link href="/calculator">Calculator</Link>
        </li>
        {isLoaded && user && (
            <li className="flex items-center ml-5">
                <UserButton afterSignOutUrl="/" />
            </li>
        )}
      </ul>
    </nav>
  );
}
