type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  await wait(2000);
  return fetch(`${process.env.API_URI}/todos`)
    .then(res => res.json())
    .then(data => data as Todo[]);
}

export async function getUserTodos(userId: string | number) {
  await wait(4000);
  return fetch(`${process.env.API_URI}/todos?userId=${userId}`)
    .then(res => res.json())
    .then(data => data as Todo[]);
}

export function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
