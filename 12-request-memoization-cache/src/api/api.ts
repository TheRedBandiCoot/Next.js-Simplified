const API_URI = 'http://localhost:3001';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
};

export async function getTodos() {
  return fetch(`${API_URI}/todos`)
    .then(res => res.json())
    .then(data => data as Todo[]);
}

export async function getTodo() {
  return fetch(`${API_URI}/todos/1`)
    .then(res => res.json())
    .then(data => data as Todo);
}
export async function getUsers() {
  return fetch(`${API_URI}/users`)
    .then(res => res.json())
    .then(data => data as User[]);
}
