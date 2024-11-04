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
  const toggleLike = useStore((state) => state.toggleLike);
  const toggleReport = useStore((state) => state.toggleReportModal);

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
          onClick={() => toggleLike(id)}
          className={`px-4 py-2 rounded ${
            liked ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {liked ? "Unlike" : "Like"}
        </button>
        <button
          onClick={() => toggleReport({ id: author })}
          className={`px-4 py-2 rounded bg-red-500`}
        >
          Report
        </button>
      </div>
    </div>
  );
};

export default memo(PostCard);
