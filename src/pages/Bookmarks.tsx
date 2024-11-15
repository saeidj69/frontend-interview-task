import { useMemo } from "react";

import useStore from "../store/useStore";
import PostCard from "../components/PostCard";

const Bookmarks: React.FC = () => {
  const posts = useStore((state) => state.posts);
  const bookmarks = useMemo(
    () => posts.filter((post) => post.bookmarked),
    [posts]
  );

  return (
    <div className="container mx-auto p-4">
      {bookmarks.length === 0 ? (
        <h1 className="text-2xl font-bold text-center">No bookmarks</h1>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Bookmarks ({bookmarks.length})
          </h1>
          {bookmarks.map((post) => (
            <PostCard
              bookmarked
              id={post.id}
              key={post.id}
              image={post.image}
              liked={post.liked}
              author={post.author}
              content={post.content}
              canRemoveBookmark
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Bookmarks;
