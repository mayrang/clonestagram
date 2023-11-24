"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import ColorButton from "./ui/ColorButton";

type Props = {
  callbackUrl: string;
  provider: Record<string, ClientSafeProvider>;
};

export default function Signin({ callbackUrl, provider }: Props) {
  return (
    <main className="flex justify-center pt-[30%]">
      {Object.values(provider).map((item) => (
        <ColorButton
          key={item.id}
          isBig={true}
          onClick={() => {
            signIn(item.id, { callbackUrl: callbackUrl });
          }}
          text={`Sign In With ${item.name}`}
        />
      ))}
    </main>
  );
}
