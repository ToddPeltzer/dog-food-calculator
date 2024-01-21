'use client'

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

type NavBarProps = {};

export default function NavBar({}: NavBarProps) {

  const { user, isLoaded } = useUser();

  return (
    <nav>
      <ul>
        <li className="flex items-center">
          <Link href="/">Home</Link>
        </li>
        <li className="flex items-center">
          <Link href="/calculator">Calculator</Link>
        </li>
        {isLoaded && user && (
            <li className="flex items-center">
                <UserButton afterSignOutUrl="/" />
            </li>
        )}
      </ul>
    </nav>
  );
}
