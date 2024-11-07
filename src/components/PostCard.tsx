import { memo } from "react";
import useStore from "../store/useStore";

interface PostCardProps {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  image,
  liked,
}) => {
  const { toggleLike, setReportModal, setToastMessage } = useStore();

  const handleToggleLike = (id: number) => {
    toggleLike(id);
    setToastMessage({
      type: liked ? "warning" : "info",
      message: liked ? "Post Unliked" : "Post Liked",
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
        <button
          onClick={() => handleToggleLike(id)}
          className={`px-4 py-2 rounded ${
            liked ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
          role="like-button"
        >
          {liked ? "Unlike" : "Like"}
        </button>
        <button
          onClick={() => setReportModal({ id: author })}
          className={`px-4 py-2 rounded bg-red-500`}
          role="report-button"
        >
          Report
        </button>
      </div>
    </div>
  );
};

export default memo(PostCard);
