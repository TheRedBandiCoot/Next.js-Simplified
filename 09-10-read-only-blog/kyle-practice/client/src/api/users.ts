type User = {
  id: string;
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

export async function getUsers() {
  await wait(2000);
  return fetch(`${process.env.API_URI}/users`)
    .then(res => res.json())
    .then(data => data as User[]);
}

export async function getUser(userId: string | number) {
  await wait(3000);
  return fetch(`${process.env.API_URI}/users/${userId}`)
    .then(res => res.json())
    .then(data => data as User);
}

export function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
