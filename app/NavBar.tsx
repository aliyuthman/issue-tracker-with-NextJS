"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();

  // usePathname() hook depends on browser API thus we need to convert it to client component - browser API are only accessible in the client component

  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
          >
            {link.label}
          </Link>
        ))}

        {/* This code below is repetitive, so the approach above with array is more clear */}
        {/* <li>
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href="/"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href="/issues"
          >
            Issues
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
