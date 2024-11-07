import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import postsData from "../data/posts.json";
export interface Post {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
  bookmarked?: boolean;
}

export interface ToastMessage {
  message: string;
  type?: "info" | "success" | "error" | "warning";
  duration?: number;
}

export interface Report {
  id: string;
}

export interface StoreState {
  posts: Post[];
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
  reportModal?: Report;
  setReportModal: (report?: Report) => void;
  toasts: ToastMessage[];
  setToastMessage: (message: ToastMessage) => void;
  removeToastMessage: (index: number) => void;
}

const mockPosts = postsData;
const useStore = create<StoreState>()(
  persist(
    (set) => ({
      posts: mockPosts,
      reportModal: undefined,
      toasts: [],
      toggleLike: (id: number) =>
        set((state) => {
          const updatedPosts = state.posts.map((post) =>
            post.id === id ? { ...post, liked: !post.liked } : post
          );
          return { posts: updatedPosts };
        }),
      toggleBookmark: (id: number) =>
        set((state) => {
          const updatedPosts = state.posts.map((post) =>
            post.id === id ? { ...post, bookmarked: !post.bookmarked } : post
          );
          return { posts: updatedPosts };
        }),
      setReportModal: (report?: Report) => set({ reportModal: report }),
      setToastMessage: (toasts) =>
        set((state) => ({ toasts: [...state.toasts, toasts] })),
      removeToastMessage: (index) =>
        set((state) => ({
          toasts: state.toasts.filter((_, i) => i !== index),
        })),
    }),

    {
      name: "posts-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
