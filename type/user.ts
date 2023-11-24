export type CreateOrExistUser = {
  _id: string;
  _type: string;
  username: string;
  name: string;
  email: string;
  image: string;
  followers: string[];
  followings: string[];
  bookmarks: string[];
};
