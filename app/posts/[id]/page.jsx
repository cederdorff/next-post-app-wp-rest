import Image from "next/image";

export default async function PostDetailPage({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://headless.cederdorff.dk/wp-json/wp/v2/posts/${id}?acf_format=standard`
  );
  const post = await response.json();
  console.log(post);

  const userResponse = await fetch(
    `https://headless.cederdorff.dk/wp-json/wp/v2/users/${post.author}`
  );
  const user = await userResponse.json();
  console.log(user);

  return (
    <section>
      <h1 className="text-5xl mb-5">{post.title.rendered}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center space-x-4 p-4 bg-stone-200 shadow rounded-lg">
            <Image
              src={user?.avatar_urls[96]}
              alt="User image"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg text font-semibold">{user?.name}</h2>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>
          <p className="my-4">
            <strong>Published:</strong>{" "}
            {new Date(post.date).toLocaleDateString()}
          </p>
          <div
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
