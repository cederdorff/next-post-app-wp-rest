import PostCard from "../components/PostCard";

export default async function PostsPage() {
  const response = await fetch(
    "https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard&orderby=date&order=asc"
  );
  const posts = await response.json();
  console.log(posts);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
