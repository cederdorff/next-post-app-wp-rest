import Image from "next/image";

export default async function PostsPage() {
  const response = await fetch(
    "https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard"
  );
  const posts = await response.json();
  console.log(posts);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <article
          key={post.id}
          className="bg-white shadow-md rounded overflow-hidden">
          <Image
            src={post.acf.image}
            alt={post.title.rendered}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg text-gray-800 font-semibold">
              {post.title.rendered}
            </h2>
            {/* <div
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered
                }}
                className="text-gray-700"
              /> */}
          </div>
        </article>
      ))}
    </section>
  );
}
