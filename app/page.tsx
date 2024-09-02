import Image from "next/image";
import { mockedPosts } from "./data";
import LikeButton from "./lib/LikeButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-12">
      {mockedPosts.map((post) => (
        <div key={post.id} className="w-full">
          <div className="relative w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              className="w-full"
              width={400}
              height={400}
            />
            <LikeButton />
          </div>
          <h2 className="text-3xl">{post.title}</h2>
        </div>
      ))}
    </main>
  );
}
