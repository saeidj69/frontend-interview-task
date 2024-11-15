import { create } from "zustand";
import { persist } from "zustand/middleware";

import { POSTS } from "../constants/posts";
import type { IPost } from "../types/Post";

export type StoreState = {
  posts: IPost[];
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
};

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      posts: POSTS,
      toggleLike: (id: number) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, liked: !post.liked } : post
          ),
        })),
      toggleBookmark: (id: number) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, bookmarked: !post.bookmarked } : post
          ),
        })),
    }),
    {
      name: "user-bookmarks",
      partialize: (state) => ({
        posts: state.posts.filter((post) => post.bookmarked),
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        posts: currentState.posts.map((post) => ({
          ...post,
          bookmarked: (persistedState as StoreState).posts.some(
            (bookmark) => bookmark.id === post.id
          ),
        })),
      }),
    }
  )
);

export default useStore;
