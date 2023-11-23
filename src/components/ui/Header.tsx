"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "./icons/HomeIcon";
import { usePathname, useRouter } from "next/navigation";
import SearchIcon from "./icons/SearchIcon";
import NewIcon from "./icons/NewIcon";
import ColorButton from "./ColorButton";
import HomeFillIcon from "./icons/HomeFillIcon";
import SearchFillIcon from "./icons/SearchFillIcon";
import NewFillIcon from "./icons/NewFillIcon";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    selectedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    selectedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    selectedIcon: <NewFillIcon />,
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };
  return (
    <header className="sticky top-0 left-0 px-6 py-6 flex justify-between items-center  border-b  z-10">
      <Link href="/" className="md:text-4xl text-2xl font-extrabold ">
        Instagram
      </Link>
      <ul className="flex items-center gap-4">
        {menu.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{pathname === item.href ? item.selectedIcon : item.icon}</Link>
          </li>
        ))}

        <li>
          <ColorButton text={"Sign In"} onClick={handleSignIn} />
        </li>
      </ul>
    </header>
  );
}
