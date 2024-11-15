import { memo } from "react";

import useStore from "../../store/useStore";
import BookmarkButton from "./Bookmark";
import LikeButton from "./Like";

import type { IPost } from "../../types/Post";

interface PostCardProps {
  id: IPost["id"];
  image: IPost["image"];
  liked: IPost["liked"];
  author: IPost["author"];
  content: IPost["content"];
  canRemoveBookmark?: boolean;
  bookmarked?: IPost["bookmarked"];
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  image,
  liked,
  author,
  content,
  bookmarked,
  canRemoveBookmark = false,
}) => {
  const toggleLike = useStore((state) => state.toggleLike);
  const toggleBookmark = useStore((state) => state.toggleBookmark);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-4">
      <h2 className="font-bold text-lg">{author}</h2>
      <p className="my-2">{content}</p>
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full h-96 object-cover mb-2 rounded"
        />
      )}

      <div className="flex gap-2">
        <LikeButton liked={liked} toggle={() => toggleLike(id)} />
        {(!bookmarked || canRemoveBookmark) && (
          <BookmarkButton
            bookmarked={bookmarked}
            toggle={() => toggleBookmark(id)}
          />
        )}
      </div>
    </div>
  );
};

export default memo(PostCard);
