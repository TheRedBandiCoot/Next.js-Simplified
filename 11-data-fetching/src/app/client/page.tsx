'use client';
import { Todo, getTodosFetch } from '@/api/api';
import { TodoList } from '@/components/TodoList';
import { useEffect, useState } from 'react';

export default async function ClientPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodosFetch().then(setTodos);
  }, []);
  return (
    <>
      <h1>Todos From Database</h1>
      <TodoList todos={todos} />
    </>
  );
}
