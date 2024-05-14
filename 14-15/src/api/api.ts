const API_URI = 'http://localhost:3001';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  return fetch(`${API_URI}/todos`, {
    // next: { tags: ['todo'] }
    // cache: 'no-store'
  })
    .then(res => res.json())
    .then(data => data as Todo[]);
}
