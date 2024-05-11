import { wait } from "@/utils/features"

export async function getComments({ postId }: { postId: string }) {
  await wait(4000)
  return fetch(`${process.env.API_URI!}/comments?postId=${postId}`).then(res =>
    res.json()
  )
}
