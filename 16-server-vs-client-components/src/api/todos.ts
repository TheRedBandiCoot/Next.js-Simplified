export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  return fetch(`http://localhost:3001/todos`)
    .then(res => res.json())
    .then(data => data as Todo[]);
}
