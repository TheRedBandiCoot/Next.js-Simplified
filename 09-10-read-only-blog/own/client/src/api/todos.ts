import { wait } from "@/utils/features"

export async function getUserTodos(id: string) {
  await wait(2500)
  return fetch(`${process.env.API_URI!}/todos?userId=${id}`).then(res =>
    res.json()
  )
}
export async function getTodos() {
  await wait(2000)

  return fetch(`${process.env.API_URI!}/todos`).then(res => res.json())
}
