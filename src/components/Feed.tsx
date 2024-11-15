import { useMemo } from "react";

import useStore from "../store/useStore";
import PostCard from "./PostCard";

const Feed: React.FC = () => {
  const posts = useStore((state) => state.posts);
  const postCount = useMemo(() => posts.length, [posts]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts ({postCount})</h1>{" "}
      {posts.map((post) => (
        <PostCard
          id={post.id}
          key={post.id}
          image={post.image}
          liked={post.liked}
          author={post.author}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Feed;
