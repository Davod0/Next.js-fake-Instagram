"use client";

import { useContext } from "react";
import { Post } from "../data";
import { PostContext } from "./PostsProvider";

interface Props {
  post: Post;
}

export default function LikeButton(props: Props) {
  // const [isLiked, setIsLiked] = useState(false);
  const { likedPosts, toggleLikedPost } = useContext(PostContext);

  const isLiked = likedPosts.some((postId) => postId === props.post.id);

  return (
    <span
      className="absolute right-4 bottom-4 text-4xl drop-shadow-md shadow-black cursor-pointer"
      onClick={() => toggleLikedPost(props.post.id)}
    >
      {isLiked ? "❤️" : "🤍"}
    </span>
  );
}
