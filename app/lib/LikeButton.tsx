"use client";

import { Post } from "../data";
import { UsedLikedPosts } from "./PostsProvider";

interface Props {
  post: Post;
}

export default function LikeButton(props: Props) {
  // const [isLiked, setIsLiked] = useState(false);
  const { toggleLikedPost, getIsLikedPost } = UsedLikedPosts();

  return (
    <span
      className="absolute right-4 bottom-4 text-4xl drop-shadow-md shadow-black cursor-pointer"
      onClick={() => toggleLikedPost(props.post.id)}
    >
      {getIsLikedPost(props.post.id) ? "❤️" : "🤍"}
    </span>
  );
}
