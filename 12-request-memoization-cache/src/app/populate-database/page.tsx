import { createTodosDatabase } from '@/db/db';
import { revalidatePath } from 'next/cache';

export default async function PopulateDatabasePage() {
  console.log('Populating database');
  await createTodosDatabase();
  return (
    <>
      <h1>Populated Database</h1>
    </>
  );
}
