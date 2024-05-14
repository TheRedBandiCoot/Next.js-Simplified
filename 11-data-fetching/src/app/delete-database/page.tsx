import { prisma } from '@/db/db';

export default async function DeletePage() {
  await prisma.todos.deleteMany();
  return <h1>Delete Current Database</h1>;
}
