"use client";

import Link from "next/link";
import { UsedLikedPosts } from "./PostsProvider";

export default function LikeCountLink() {
  const { likedPosts } = UsedLikedPosts();

  return <Link href="/">{likedPosts.length}❤️</Link>;
}
