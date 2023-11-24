import Image from "next/image";
import React from "react";

type Props = {
  isBig?: boolean;
  image?: string | null;
};

export default function ProfileIcon({ isBig = false, image }: Props) {
  return (
    <div
      className={`bg-gradient-to-bl rounded-full from-fuchsia-600 via-rose-500 to-amber-300  overflow-hidden w-9 h-9 ${
        isBig ? "p-[0.4rem]" : "p-[0.2rem]"
      }`}
    >
      <img
        src={image ?? undefined}
        referrerPolicy="no-referrer"
        alt={"profile image"}
        className={`bg-white w-full h-full rounded-full `}
      />
    </div>
  );
}
