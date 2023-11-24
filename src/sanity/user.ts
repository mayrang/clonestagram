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
