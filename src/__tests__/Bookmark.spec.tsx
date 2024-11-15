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
import useStore, { StoreState } from "@/store/useStore";
import BookmarkButton from "@/components/PostCard/Bookmark";

jest.mock("@/store/useStore", () => {
  return create<StoreState>((set) => ({
    posts: [],
    toggleLike: jest.fn(),
    toggleBookmark: jest.fn((id: number) =>
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, bookmarked: !post.bookmarked } : post
        ),
      }))
    ),
  }));
});

describe("BookmarkButton", () => {
  const mockToggle = jest.fn();

  beforeEach(() => {
    mockToggle.mockClear();
  });

  it("renders 'Bookmark' button when not bookmarked", () => {
    render(<BookmarkButton bookmarked={false} toggle={mockToggle} />);

    const button = screen.getByRole("button", { name: /bookmark/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-gray-200");
    expect(button).not.toHaveClass("bg-blue-500");
  });

  it("renders 'Bookmark' button when not bookmarked", () => {
    render(<BookmarkButton bookmarked={true} toggle={mockToggle} />);

    const button = screen.getByRole("button", { name: /Remove/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-500");
    expect(button).not.toHaveClass("bg-gray-200");
  });

  it("calls toggle function when clicked", () => {
    render(<BookmarkButton bookmarked={true} toggle={mockToggle} />);

    const button = screen.getByRole("button", { name: /bookmark/i });
    fireEvent.click(button);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});

describe("PostCard store bookmark", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Reset store to initial state
    const store = useStore.getState();
    store.posts = POSTS;
  });

  it("should toggle bookmark status", () => {
    const { result } = renderHook(() => useStore());
    const toggleBookmark = result.current.toggleBookmark;

    act(() => {
      toggleBookmark(1);
    });

    expect(toggleBookmark).toHaveBeenCalledTimes(1);
    expect(toggleBookmark).toHaveBeenCalledWith(1);

    const updatedPosts = result.current.posts;
    expect(updatedPosts.find((post) => post.id === 1)?.bookmarked).toBe(true);
  });
});
