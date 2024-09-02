"use client";

import { createContext, PropsWithChildren, useState } from "react";

interface ContextValue {
  likedPosts: string[];

  toggleLikedPost: (postId: string) => void;
}

export const PostContext = createContext<ContextValue>({} as ContextValue);

export default function PostProvider(props: PropsWithChildren) {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLikedPost = (postId: string) => {};

  return (
    <PostContext.Provider value={{ likedPosts: likedPosts, toggleLikedPost }}>
      {props.children}
    </PostContext.Provider>
  );
}
