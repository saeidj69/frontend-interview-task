export type IPost = {
  id: number;
  image: string;
  author: string;
  liked: boolean;
  content: string;
  bookmarked?: boolean;
};
