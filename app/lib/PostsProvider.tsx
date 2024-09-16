"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextValue {
  likedPosts: string[];
  toggleLikedPost: (postId: string) => void;
  getIsLikedPost: (postId: string) => boolean;
}

const PostContext = createContext<ContextValue>({} as ContextValue);

export default function PostProvider(props: PropsWithChildren) {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  //Ladda in tillståndet från local storage
  useEffect(() => {
    if (isLoaded) return;
    const strinFiedState = localStorage.getItem("likedPosts");
    setLikedPosts(JSON.parse(strinFiedState ?? "[]"));
    setIsLoaded(true);
  });

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

  const toggleLikedPost = (postId: string) => {
    const isToggled = likedPosts.some((id) => id === postId);
    if (isToggled) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const getIsLikedPost = (postId: string) => {
    return likedPosts.some((id) => id === postId);
  };

  return (
    <PostContext.Provider
      value={{ likedPosts: likedPosts, toggleLikedPost, getIsLikedPost }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

// skapa en liten wrapper hook för att konsumera kontexten
export const UsedLikedPosts = () => useContext(PostContext);
