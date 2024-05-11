import { wait } from "@/utils/features"

export async function getUsers() {
  await wait(2000)
  return fetch(`${process.env.API_URI!}/users`).then(res => res.json())
}

export async function getUser(id: string) {
  await wait(3500)
  return fetch(`${process.env.API_URI!}/users/${id}`).then(res => res.json())
}
