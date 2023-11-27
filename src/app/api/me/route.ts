import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getMe } from "@/sanity/user";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      throw new Error("로그인을 반드시 해야합니다.");
    }
    const result = await getMe(session.user.username);
    return Response.json(result);
  } catch (err) {
    console.error(err);
    return new Response("유저를 가져오는 과정에서 서버 에러 발생", {
      status: 500,
    });
  }
}
