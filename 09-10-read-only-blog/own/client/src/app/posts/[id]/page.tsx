import { getComments } from "@/api/comments"
import { getPost } from "@/api/posts"
import { getUser } from "@/api/users"
import {
  //   SimpleSkeletonText,
  Skeleton,
  SkeletonList
} from "@/components/Skeleton"
import Link from "next/link"
import { Suspense } from "react"

export default async function Post({ params }: { params: { id: string } }) {
  return (
    <>
      <h1 className="page-title">
        <Suspense fallback={<Skeleton short inline />}>
          <ShowPostTitle id={params.id} />
        </Suspense>
      </h1>
      <span className="page-subtitle">
        By:{" "}
        <Suspense fallback={<Skeleton short inline />}>
          <ShowUser id={params.id} />
        </Suspense>
      </span>
      <div>
        <Suspense
          fallback={
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          }
        >
          <ShowPostBody id={params.id} />
        </Suspense>
      </div>

      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <Suspense
          fallback={
            <SkeletonList amount={5}>
              <div className="card">
                <div className="card-body">
                  <div className="text-sm mb-1">
                    <Skeleton short />
                  </div>
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            </SkeletonList>
          }
        >
          <ShowComments postId={params.id} />
        </Suspense>
      </div>
    </>
  )
}
type CommentsType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
async function ShowComments({ postId }: { postId: string }) {
  const comments: CommentsType[] = await getComments({ postId })
  return (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="card">
          <div className="card-body">
            <div className="text-sm mb-1">{comment.email}</div>
            {comment.body}
          </div>
        </div>
      ))}
    </>
  )
}

async function ShowPostBody({ id }: { id: string }) {
  const post = await getPost(id)
  return <>{post.body}</>
}

async function ShowPostTitle({ id }: { id: string }) {
  const post = await getPost(id)
  return <>{post.title}</>
}

async function ShowUser({ id }: { id: string }) {
  const user = await getUser(id)
  return (
    <Link className="text-blue-400" href={`/users/${user.id}`}>
      {user.name}
    </Link>
  )
}
