import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

export default function Home() {
  const [v, sv] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (value === "") return;

    fetch(`/api/${value}`)
      .then((res) => res.json())
      .then((data) => {
        sv(data.postId);
        console.log(data);
        setTimeout(() => {
          router.push(`/api/${data.postId}`);
        }, 3000);
      });
  };

  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/todos"}>/Todos</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={"dynamic_value_123"} ref={inputRef} />
        <button>
          GET POSTID Dynamic value Edit `src/pages/api/[postId].ts`
        </button>
        {v && (
          <>
            <h3>{v}</h3>
            <i>Redirecting to this ({v}) route in 3s</i>
          </>
        )}
      </form>
    </>
  );
}
