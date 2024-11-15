import type { FC } from "react";
import type { IPost } from "../../../types/Post";

type Props = {
  liked: IPost["liked"];
  toggle: VoidFunction;
};

const LikeButton: FC<Props> = ({ liked, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`px-4 py-2 rounded ${
        liked ? "bg-red-500 text-white" : "bg-gray-200 dark:bg-gray-700"
      }`}
    >
      {liked ? "Unlike" : "Like"}
    </button>
  );
};

export default LikeButton;
