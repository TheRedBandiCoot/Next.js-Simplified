import wait from "@/utils/wait";
import type { Todo } from "@/types/todo.type";
import { unstable_noStore } from "next/cache";

export async function getTodos() {
  // await wait(2000);
  unstable_noStore();
  return fetch(`${process.env.API_URI}/todos`)
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}
export async function getUserTodos(userId: string | number) {
  await wait(2000);
  return fetch(`${process.env.API_URI}/todos?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}
