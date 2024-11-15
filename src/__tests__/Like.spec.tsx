import "@testing-library/jest-dom";

import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { create } from "zustand";

import { POSTS } from "@/constants/posts";
import LikeButton from "@/components/PostCard/Like";
import useStore, { StoreState } from "@/store/useStore";

jest.mock("@/store/useStore", () => {
  return create<StoreState>((set) => ({
    posts: [],
    toggleLike: jest.fn((postId) => {
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId ? { ...post, liked: !post.liked } : post
        ),
      }));
    }),
    toggleBookmark: jest.fn(),
  }));
});

describe("LikeButton", () => {
  const mockToggle = jest.fn();

  beforeEach(() => {
    mockToggle.mockClear();
  });

  it("renders 'Like' button when not liked", () => {
    render(<LikeButton liked={false} toggle={mockToggle} />);

    const button = screen.getByRole("button", { name: /like/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-gray-200");
    expect(button).not.toHaveClass("bg-red-500");
  });

  it("renders 'Unlike' button when liked", () => {
    render(<LikeButton liked={true} toggle={mockToggle} />);

    const button = screen.getByRole("button", { name: /unlike/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-red-500");
    expect(button).not.toHaveClass("bg-gray-200");
  });

  it("calls toggle function when clicked", () => {
    render(<LikeButton liked={false} toggle={mockToggle} />);

    const button = screen.getByRole("button", { name: /like/i });
    fireEvent.click(button);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});

describe("PostCard store like", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Reset store to initial state
    const store = useStore.getState();
    store.posts = POSTS;
  });

  it("should toggle like status", () => {
    const { result } = renderHook(() => useStore());
    const toggleLike = result.current.toggleLike;

    act(() => {
      toggleLike(1);
    });

    expect(toggleLike).toHaveBeenCalledTimes(1);
    expect(toggleLike).toHaveBeenCalledWith(1);

    const updatedPosts = result.current.posts;
    expect(updatedPosts.find((post) => post.id === 1)?.liked).toBe(true);
  });
});
