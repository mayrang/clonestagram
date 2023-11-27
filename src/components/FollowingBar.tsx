"use client";
import useMe from "@/hooks/useMe";
import React from "react";

export default function FollowingBar() {
  const { data, error, isLoading } = useMe();
  console.log("최종 데이터", data);

  return <div>Following Bar</div>;
}
