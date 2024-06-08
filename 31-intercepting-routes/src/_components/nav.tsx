import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Link href={"/"}>/Home</Link>
      <Link href={"/email"}>/Email</Link>
      <Link href={"/about"}>/About</Link>
      <Link href={"/about/1"}>/About 1</Link>
      <Link href={"/about/2"}>/About 2</Link>
      <Link href={"/login"}>/Login</Link>
      <Link href={"/signup"}>/Sign Up</Link>
      <Link href={"/signup/new"}>/SignUp New</Link>
      <Link href={"/signup/new/1"}>/SignUp New 1</Link>
      <Link href={"/team"}>/Team</Link>
      <Link href={"/team/nested"}>/Team/Nested</Link>
      <Link href={"/posts"}>/Posts</Link>
      <Link href={"/posts/1"}>/Posts/1</Link>
      <Link href={"/contact"}>/Contact</Link>
    </nav>
  );
}
