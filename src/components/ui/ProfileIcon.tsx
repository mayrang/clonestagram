import Image from "next/image";
import React from "react";

type Props = {
  isBig?: boolean;
  image?: string | null;
  isHighlight?: boolean;
};

export default function ProfileIcon({ isBig = false, image, isHighlight = true }: Props) {
  return (
    <div
      className={`rounded-full  overflow-hidden  ${isBig ? "p-[0.4rem] w-16 h-16" : "p-[0.2rem] w-9 h-9"} ${
        isHighlight ? "bg-gradient-to-bl  from-fuchsia-600 via-rose-500 to-amber-300" : ""
      }`}
    >
      <img
        src={image ?? undefined}
        referrerPolicy="no-referrer"
        alt={"profile image"}
        className={` w-full h-full rounded-full `}
      />
    </div>
  );
}
