import { Post } from "../store/useStore";

export const loadPostsWithLocalStorage = (posts: Post[]): Post[] => {
  const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
  return posts.map((post) => {
    const storedPost = storedPosts.find((p: Post) => p.id === post.id);
    return storedPost ? { ...post, liked: storedPost.liked } : post;
  });
};

export const savePostsToLocalStorage = (posts: Post[]) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};
