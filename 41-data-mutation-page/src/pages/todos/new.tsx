import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";

export default function newTodosPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputRef.current?.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        router.push(`/todos/${data.id}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} defaultValue="New Todo " type="text" />
      <button>Create</button>
    </form>
  );
}
