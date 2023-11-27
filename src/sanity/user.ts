import { client } from "./sanity";
import { CreateOrExistUser } from "../../type/user";

export async function createUser(user: CreateOrExistUser) {
  return client
    .createIfNotExists(user)
    .then((res) => {
      return res;
    })
    .catch(console.error);
}

export async function getMe(username: string) {
  try {
    const result = await client.fetch(
      `*[_type == 'user' && username == '${username}']{name, username, email, followings[]->, followers[]->}[0]`
    );

    return result;
  } catch (err: any) {
    console.error(err);
    throw new Error("유저를 가져오는 과정에서 에러 발생");
  }
}
