interface BookmarkButtonProps {
  isBookmarked: boolean;
  onClick: () => void;
}

const BookmarkButton = ({ isBookmarked, onClick }: BookmarkButtonProps) => {
  const toggleBookmark = () => {
    onClick();
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
        isBookmarked ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
      }`}
    >
      <svg
        className={`w-5 h-5 mr-2 fill-current ${
          isBookmarked ? "text-blue-500" : "text-gray-500"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M6 2C4.89 2 4 2.89 4 4V20L12 16L20 20V4C20 2.89 19.1 2 18 2H6Z" />
      </svg>
      <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
    </button>
  );
};

export default BookmarkButton;
