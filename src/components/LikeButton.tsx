interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        liked ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
      }`}
      role="like-button"
    >
      {liked ? "Unlike" : "Like"}
    </button>
  );
};

export default LikeButton;
