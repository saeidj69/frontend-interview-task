import { memo } from "react";
import useStore from "../../store/useStore";
import BookmarkButton from "../buttons/BookmarkButton";
import LikeButton from "../buttons/LikeButton";

interface PostCardProps {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
  bookmarked?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  image,
  liked,
  bookmarked = false,
}) => {
  const { toggleLike, setReportModal, setToastMessage, toggleBookmark } =
    useStore();

  const handleToggleLike = () => {
    toggleLike(id);
  };

  const handleTogglebookmark = () => {
    toggleBookmark(id);
    setToastMessage({
      type: bookmarked ? "warning" : "info",
      message: bookmarked ? "Post Unbookmarked" : "Post Bookmarked",
    });
  };

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
      <div className="flex gap-3">
        <LikeButton liked={liked} onClick={handleToggleLike} />
        <button
          onClick={() => setReportModal({ id: author })}
          className={`px-4 py-2 rounded bg-red-500`}
          role="report-button"
        >
          Report
        </button>
        <BookmarkButton
          isBookmarked={bookmarked}
          onClick={handleTogglebookmark}
        />
      </div>
    </div>
  );
};

export default memo(PostCard);
