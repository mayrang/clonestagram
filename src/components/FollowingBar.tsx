"use client";
import useMe from "@/hooks/useMe";
import React from "react";
import EasyCarousel from "./ui/EasyCarousel";
import ProfileIcon from "./ui/ProfileIcon";

export default function FollowingBar() {
  const { data, error, isLoading } = useMe();
  console.log("최종 데이터", data);
  const followings = data?.followings;
  if (followings && followings.length > 0) {
    return (
      <div>
        <EasyCarousel viewItem={6}>
          {followings.map((following) => (
            <ProfileIcon image={following.image} isBig={true} key={following.username} />
          ))}
        </EasyCarousel>
      </div>
    );
  } else {
    return <p></p>;
  }
}
