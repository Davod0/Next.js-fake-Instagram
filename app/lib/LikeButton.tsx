"use client";

import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <span
      className="absolute right-4 bottom-4 text-4xl drop-shadow-md shadow-black cursor-pointer"
      onClick={() => setIsLiked(!isLiked)}
    >
      {isLiked ? "❤️" : "🤍"}
    </span>
  );
}
