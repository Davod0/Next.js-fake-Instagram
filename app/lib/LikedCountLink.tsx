"use client";

import Link from "next/link";
import { useContext } from "react";
import { PostContext } from "./PostsProvider";

export default function LikeCountLink() {
  const { likedPosts } = useContext(PostContext);

  return <Link href="/">{likedPosts.length}❤️</Link>;
}
