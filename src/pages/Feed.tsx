import { useMemo, useState } from "react";

import PostCard from "../components/PostCard";
import ReportFeed from "../components/Report";
import useStore from "../store/useStore";

const Feed: React.FC = () => {
  const posts = useStore((state) => state.posts);
  const postCount = useMemo(() => posts.length, [posts]);

  const [showReportModal, toggleReportModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handleReport = (id: number) => {
    setSelectedPost(id);
    toggleReportModal(true);
  };

  return (
    <>
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
            bookmarked={post.bookmarked}
            onReport={() => handleReport(post.id)}
          />
        ))}
      </div>

      <ReportFeed
        postId={selectedPost}
        isOpen={showReportModal}
        toggle={() => toggleReportModal(false)}
      />
    </>
  );
};

export default Feed;
