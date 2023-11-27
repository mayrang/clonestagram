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

export type User = {
  _id: string;
  _type: string;
  _createAt: string;
  name: string;
  username: string;
  email: string;
  image: string;
  followings: User[];
  followers: User[];
};
