import { IPost } from "../../../types/Post";

import type { FC } from "react";

type Props = {
  toggle: VoidFunction;
  bookmarked: IPost["bookmarked"];
};

const BookmarkButton: FC<Props> = ({ bookmarked, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`px-4 py-2 rounded ${
        bookmarked ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
      }`}
    >
      {bookmarked ? "Remove From Bookmark" : "Bookmark"}
    </button>
  );
};

export default BookmarkButton;
