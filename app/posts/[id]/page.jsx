import Image from "next/image";

export default async function PostDetailPage({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://headless.cederdorff.dk/wp-json/wp/v2/posts/${id}?acf_format=standard`
  );
  const post = await response.json();
  console.log(post);

  return (
    <section>
      <h1 className="text-5xl">{post.title.rendered}</h1>
      <Image
        src={post.acf.image}
        width={800}
        height={400}
        alt={post.title.rendered}
        className="rounded-lg my-4"
      />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </section>
  );
}
