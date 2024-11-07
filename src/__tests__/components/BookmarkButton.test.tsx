import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import PostCard from "../../components/PostCard.tsx";
import useStore, { mockPosts } from "../../store/useStore.ts";

describe("PostCard Component", () => {
  test("Toggle Bookmark Button", () => {
    const toggleLike = jest.fn();
    const setToastMessage = jest.fn();
    useStore.setState({ toggleLike, setToastMessage });

    const { rerender } = render(<PostCard {...mockPosts[0]} />);
    const likeButton = screen.getByRole("like-button");
    expect(likeButton).toHaveTextContent("Like");

    fireEvent.click(likeButton);

    expect(toggleLike).toHaveBeenCalledTimes(1);
    rerender(<PostCard {...{ ...mockPosts[0], liked: true }} />);
    expect(likeButton).toHaveTextContent("Unlike");
  });
});
