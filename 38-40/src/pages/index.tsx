import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/todos"}>/Todos</Link>
      <br />
      <Link href={"/posts"}>/Post</Link>
      <br />
      <Link href={"/comments"}>/Comments</Link>
    </>
  );
}
