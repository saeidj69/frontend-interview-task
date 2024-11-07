import { fireEvent, render, screen } from "@testing-library/react";
import LikeButton from "../../components/LikeButton";

describe("LikeButton", () => {
  it("renders correctly when not liked", () => {
    render(<LikeButton liked={false} onClick={() => {}} />);

    const button = screen.getByRole("like-button");
    expect(button).toHaveTextContent("Like");
    expect(button).toHaveClass("bg-gray-200");
  });

  it("renders correctly when liked", () => {
    render(<LikeButton liked={true} onClick={() => {}} />);

    const button = screen.getByRole("like-button");
    expect(button).toHaveTextContent("Unlike");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<LikeButton liked={false} onClick={onClickMock} />);

    const button = screen.getByRole("like-button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
