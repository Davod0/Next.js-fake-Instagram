import LikeCountLink from "./LikedCountLink";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-blue-300">
      <h1>Insta</h1>
      <LikeCountLink />
    </header>
  );
}
