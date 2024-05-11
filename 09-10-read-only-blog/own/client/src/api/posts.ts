import { wait } from "@/utils/features"

export async function getPosts() {
  await wait(2000)
  return fetch(`${process.env.API_URI!}/posts`).then(res => res.json())
}

export async function getUserPosts(id: string) {
  await wait(1500)
  return fetch(`${process.env.API_URI!}/posts?userId=${id}`).then(res =>
    res.json()
  )
}

export async function getPost(id: string) {
  await wait(1500)
  return fetch(`${process.env.API_URI!}/posts/${id}`).then(res => res.json())
}
