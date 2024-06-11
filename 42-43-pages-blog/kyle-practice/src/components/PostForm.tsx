import { FormEvent, useRef, useState } from "react";
import { FormGroup } from "./FormGroup";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  post?: { id: number; title: string; body: string; userId: number };
  users: { id: number; name: string }[];
};

export function PostForm({ post, users }: Props) {
  const [errors, setErrors] = useState<{
    title?: string;
    userId?: string;
    body?: string;
  }>({});
  const titleRef = useRef<HTMLInputElement>(null);
  const userIdRef = useRef<HTMLSelectElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    fetch(`/api/posts${post ? `/${post.id}` : ""}`, {
      method: post ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleRef.current?.value,
        body: bodyRef.current?.value,
        userId: Number(userIdRef.current?.value),
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((data) => Promise.reject(data));
      })
      .then((post) => {
        return router.push(`/posts/${post.id}`);
      })
      .catch((errors) => {
        setErrors(errors);
      })
      .then(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            ref={titleRef}
            // required
            defaultValue={post?.title}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.userId}>
          <label htmlFor="userId">Author</label>
          <select
            required
            name="userId"
            id="userId"
            ref={userIdRef}
            defaultValue={post?.userId}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup errorMessage={errors.body}>
          <label htmlFor="body">Body</label>
          <textarea
            // required
            name="body"
            id="body"
            ref={bodyRef}
            defaultValue={post?.body}
          />
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link
          className="btn btn-outline"
          href={post ? `/posts/${post.id}` : "/posts"}
        >
          Cancel
        </Link>
        <button disabled={isSubmitting} className="btn">
          {isSubmitting ? "Saving" : "Save"}
        </button>
      </div>
    </form>
  );
}
