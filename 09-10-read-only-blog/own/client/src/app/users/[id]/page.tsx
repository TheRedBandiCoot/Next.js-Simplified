import { getUserPosts } from "@/api/posts"
import { getUserTodos } from "@/api/todos"
import { getUser } from "@/api/users"
import { PostCard, SkeletonPostCard } from "@/components/PostCard"
import { TodoItem } from "@/components/TodoItem"
import { Skeleton, SkeletonList } from "@/components/Skeleton"
import { Suspense } from "react"
import { User as UserType } from "../page"
import { Post } from "@/app/posts/page"

export default function User({ params }: { params: { id: string } }) {
  return (
    <>
      <h1 className="page-title">
        <Suspense fallback={<Skeleton short inline />}>
          <ShowUsername id={params.id} data="name" />
        </Suspense>
      </h1>
      <div className="page-subtitle">
        <Suspense fallback={<Skeleton short inline />}>
          <ShowUsername id={params.id} data="email" />
        </Suspense>
      </div>
      <div>
        <b>Company:</b>{" "}
        <Suspense fallback={<Skeleton short inline />}>
          <ShowUsername id={params.id} data="company" />
        </Suspense>
      </div>
      <div>
        <b>Website:</b>{" "}
        <Suspense fallback={<Skeleton short inline />}>
          <ShowUsername id={params.id} data="website" />
        </Suspense>
      </div>
      <div>
        <b>Address:</b>{" "}
        <Suspense fallback={<Skeleton short inline />}>
          <ShowUsername id={params.id} data="address" />
        </Suspense>
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={3}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <GetUserPosts id={params.id} />
        </Suspense>
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={5}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <GetUserTodos id={params.id} />
        </Suspense>
      </ul>
    </>
  )
}

async function ShowUsername({
  id,
  data
}: {
  id: string
  data: "name" | "email" | "website" | "company" | "address"
}) {
  const user: UserType = await getUser(id)
  if (data === "company") return <>{user.company.name}</>
  if (data === "address")
    return (
      <>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</>
    )
  return <>{user[data]}</>
}

async function GetUserPosts({ id }: { id: string }) {
  const posts: Post[] = await getUserPosts(id)

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  )
}

export type TodoType = {
  userId: number
  id: string
  title: string
  completed: boolean
}

async function GetUserTodos({ id }: { id: string }) {
  const todos: TodoType[] = await getUserTodos(id)

  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  )
}
