import useStore from "../store/useStore";
import PostCard from "./PostCard";

const Feed: React.FC = () => {
  const posts = useStore((state) => state.posts);
  const postCount = posts.length;

  // Issues: There are some unnecessary effects across the projects. Identify and remove them as it does not affect the functionality of the project.

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts ({postCount})</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          liked={post.liked}
        />
      ))}
    </div>
  );
};

export default Feed;
