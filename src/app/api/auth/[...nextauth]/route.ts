import { signIn } from "next-auth/react";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser } from "@/sanity/user";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user.email) {
        return false;
      }
      const newUser = {
        _id: user.id,
        _type: "user",
        username: user.email.split("@")[0] ?? (user.name as string),
        name: user.name as string,
        email: user.email,
        followings: [],
        followers: [],
        bookmarks: [],
        image: user.image ?? "",
      };

      await createUser(newUser);
      return true;
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      session.user.username = session.email?.split("@")[0] ?? session.user.name;
      session.user.email = token.email;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
