import { memo } from "react";
import useStore from "../store/useStore";

interface PostCardProps {
  id: number;
  author: string;
  content: string;
  image: string | null;
  liked: boolean;
  bookmarked: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  image,
  liked,
  bookmarked,
}) => {
  const toggleLike = useStore((state) => state.toggleLike);
  const toggleBookmark = useStore((state) => state.toggleBookmark);
  const buttonClass = liked
    ? "bg-red-500 text-white"
    : "bg-gray-200 dark:bg-gray-600 text-black";
  const bookmarkButtonClass = bookmarked
    ? "bg-yellow-500 text-white"
    : "bg-gray-200 dark:bg-gray-600 text-black";
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-4">
      <h2 className="font-bold text-lg">{author}</h2>
      <p className="my-2">{content}</p>
      {image ? (
        <img
          src={image}
          alt="Post"
          className="w-full h-96 object-contain mb-4 rounded"
        />
      ) : (
        <div className="w-full h-96 bg-gray-300 rounded mb-4" />
      )}
      <button
        onClick={() => toggleLike(id)}
        className={`px-4 py-2 rounded ${buttonClass}`}
      >
        {liked ? "Unlike" : "Like"}
      </button>
      <button
        onClick={() => toggleBookmark(id)} 
        className={`px-4 py-2 ml-4 rounded ${bookmarkButtonClass}`}
      >
        {bookmarked ? "Remove Bookmark" : "Add Bookmark"}
      </button>
    </div>
  );
};

export default memo(PostCard);
