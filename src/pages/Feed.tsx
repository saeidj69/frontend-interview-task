import PostCard from "../components/cards/PostCard";
import ReportPostModal from "../components/modals/ReportPostModal";
import useStore from "../store/useStore";
interface FeedProps {
  onlyBookmarkedItems?: boolean;
}

const Feed = (props: FeedProps) => {
  const { posts: allposts, reportModal } = useStore();
  const { onlyBookmarkedItems } = props;

  const posts = onlyBookmarkedItems
    ? allposts.filter((e) => e.bookmarked)
    : allposts;

  const postCount = posts.length;

  // Issues: There are some unnecessary effects across the projects. Identify and remove them as it does not affect the functionality of the project.

  return (
    <div className="container mx-auto p-4">
      <ReportPostModal isOpen={!!reportModal} />
      <h1 className="text-2xl font-bold mb-4">
        {onlyBookmarkedItems ? "Bookmarked" : ""} Posts ({postCount})
      </h1>{" "}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          liked={post.liked}
          bookmarked={post.bookmarked}
        />
      ))}
    </div>
  );
};

export default Feed;
