import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/components/Signin";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SigninPage({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  const provider = (await getProviders()) || {};

  return <Signin provider={provider} callbackUrl={callbackUrl || "/"} />;
}
