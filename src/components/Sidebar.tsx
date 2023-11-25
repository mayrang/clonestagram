import React from "react";
import Profile from "./ui/Profile";

export default function Sidebar() {
  return (
    <article className="py-6 max-w-md">
      <Profile />
      <p className="mt-7 text-gray-500 text-md ">
        About · Help · Press · API · Jobs ·<br /> Privacy · Terms · Locations ·<br /> Language
      </p>
      <p className="mt-7 text-gray-800 text-md">
        @Copylight INSTAGRAM
        <br />
        from METAL
      </p>
    </article>
  );
}
