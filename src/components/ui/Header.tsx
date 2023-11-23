"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "./icons/HomeIcon";
import { usePathname, useRouter } from "next/navigation";
import SearchIcon from "./icons/SearchIcon";
import NewIcon from "./icons/NewIcon";
import ColorButton from "./ColorButton";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname.split("/")[1];
  const handleSignIn = () => {
    router.push("/signin");
  };
  return (
    <header className="sticky top-0 left-0 px-6 py-6 flex justify-between items-center border border-b-zinc-200">
      <Link href="/" className="md:text-4xl text-2xl font-extrabold ">
        Instagram
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/">
          <HomeIcon isSelected={path === ""} />
        </Link>
        <Link href="/search">
          <SearchIcon isSelected={path === "search"} />
        </Link>
        <Link href="/new">
          <NewIcon isSelected={path === "new"} />
        </Link>
        <ColorButton text={"Sign In"} onClick={handleSignIn} />
      </div>
    </header>
  );
}
