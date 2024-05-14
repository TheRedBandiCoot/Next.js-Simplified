import { delTodosDatabase } from '@/db/db';

export default async function DeletePage() {
  console.log('Delete Database');

  await delTodosDatabase();

  return <h1>Delete Current Database</h1>;
}
