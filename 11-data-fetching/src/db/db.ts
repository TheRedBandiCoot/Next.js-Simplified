import { PrismaClient, PrismaPromise } from '@prisma/client';
import { unstable_cache } from 'next/cache';

export const prisma = new PrismaClient();

export function getTodosDatabase() {
  return prisma.todos.findMany();
}
