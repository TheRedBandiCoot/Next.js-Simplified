import { unstable_noStore } from "next/cache";
import prisma from "./db";

export function getDbTodos() {
  unstable_noStore();
  console.log("@@@DB@@@@");
  return prisma.todo.findMany();
}

export function getUserTodos(userId: string | number) {
  return prisma.todo.findMany({ where: { userId: Number(userId) } });
}
