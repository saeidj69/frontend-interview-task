import { fireEvent, render, screen } from "@testing-library/react";
import BookmarkButton from "../../components/buttons/BookmarkButton";

describe("Bookmark Button", () => {
  it("renders correctly when not bookmarked", () => {
    render(<BookmarkButton isBookmarked={false} onClick={() => {}} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Bookmark");
    expect(button).toHaveClass("bg-gray-100 text-gray-800");
  });

  it("renders correctly when bookmarked", () => {
    render(<BookmarkButton isBookmarked={true} onClick={() => {}} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Bookmarked");
    expect(button).toHaveClass("bg-blue-100 text-blue-800");
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<BookmarkButton isBookmarked={false} onClick={onClickMock} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
