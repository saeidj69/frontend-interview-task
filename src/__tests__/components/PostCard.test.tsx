import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import PostCard from "../../components/PostCard.tsx";
import useStore, { mockPosts } from "../../store/useStore.ts";

const initialState = {
  posts: mockPosts,
};

beforeEach(() => useStore.setState(initialState));

describe("PostCard Component", () => {
  test("Toggle Like Button", () => {
    const toggleLike = jest.fn();
    const setToastMessage = jest.fn();
    useStore.setState({ toggleLike, setToastMessage });

    const { rerender } = render(<PostCard {...mockPosts[0]} />);

    const likeButton = screen.getByRole("like-button");

    expect(likeButton).toHaveTextContent("Like");

    fireEvent.click(likeButton);

    expect(toggleLike).toHaveBeenCalledTimes(1);
    expect(setToastMessage).toHaveBeenCalledWith({
      message: "Post Liked",
      type: "info",
    });

    rerender(<PostCard {...{ ...mockPosts[0], liked: true }} />);

    expect(likeButton).toHaveTextContent("Unlike");
  });

  test("Report Post Button", () => {
    const setReportModal = jest.fn();
    useStore.setState({ setReportModal });

    render(<PostCard {...mockPosts[0]} />);

    const reportButton = screen.getByRole("report-button");

    expect(reportButton).toHaveTextContent("Report");

    fireEvent.click(reportButton);

    expect(setReportModal).toHaveBeenCalledWith({
      id: "Author Name",
    });
  });
});
