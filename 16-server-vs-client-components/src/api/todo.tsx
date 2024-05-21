import type { Todo } from './todos';
import 'server-only';

export async function getTodo() {
  return fetch(`http://localhost:3001/todos/1`)
    .then(res => res.json())
    .then(data => data as Todo);
}
