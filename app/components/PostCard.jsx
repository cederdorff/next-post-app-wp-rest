import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
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
    </Link>
  );
}
