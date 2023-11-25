import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import ProfileIcon from "./ProfileIcon";
import Link from "next/link";
export default async function Profile() {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  const user = session?.user;
  return user ? (
    <Link href={`/${user.username}`} className="flex items-center gap-4">
      <ProfileIcon image={user.image} isBig={true} isHighlight={false} />
      <div>
        <p className="font-bold text-md">{user.username}</p>
        <p className="text-lg">{user.name}</p>
      </div>
    </Link>
  ) : (
    <p>유저 정보가 존재하지 않습니다.</p>
  );
}
