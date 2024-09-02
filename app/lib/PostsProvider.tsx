"use client";

import { createContext, PropsWithChildren, useState } from "react";

interface ContextValue {
  likedPosts: string[];

  toggleLikedPost: (postId: string) => void;
}

export const PostContext = createContext<ContextValue>({} as ContextValue);

export default function PostProvider(props: PropsWithChildren) {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLikedPost = (postId: string) => {
    const isToggled = likedPosts.some((id) => id === postId);
    if (isToggled) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <PostContext.Provider value={{ likedPosts: likedPosts, toggleLikedPost }}>
      {props.children}
    </PostContext.Provider>
  );
}
