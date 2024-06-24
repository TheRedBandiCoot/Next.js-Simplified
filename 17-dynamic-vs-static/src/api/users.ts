import wait from "@/utils/wait";
import type { User } from "@/types/user.type";

export async function getUsers() {
  await wait(2000);
  return fetch(`${process.env.API_URI}/users`)
    .then((res) => res.json())
    .then((data) => data as User[]);
}
export async function getUser(userId: string | number) {
  await wait(2000);
  return fetch(`${process.env.API_URI}/users/${userId}`)
    .then((res) => res.json())
    .then((data) => data as User);
}
