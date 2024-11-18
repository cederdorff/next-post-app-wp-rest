import Image from "next/image";

export default async function PostDetailPage({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://headless.cederdorff.dk/wp-json/wp/v2/posts/${id}?acf_format=standard&_embed`
  );
  const post = await response.json();
  console.log(post);

  return (
    <section>
      <h1 className="text-5xl mb-5">{post.title.rendered}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Author:</strong> {post["_embedded"]["author"][0].name}
          </p>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(post.date).toLocaleDateString()}
          </p>
          <div
            className="my-4"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </div>
        <Image
          src={post.acf.image}
          width={800}
          height={400}
          alt={post.title.rendered}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
