import { PrismaClient } from "@prisma/client";
import seedData from "./seed.json";

const prisma = new PrismaClient();

const batchSize = 10;
type User = {
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
    catchPhrase: string;
    bs: string;
  };
};
type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function batchesPromises<T>(
  items: T[],
  batchSize: number,
  asyncFunc: (item: T) => Promise<void>,
) {
  const batches: T[][] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }
  // console.log(batches);
  for (const batch of batches) {
    // console.log(batch);
    await Promise.all(batch.map(asyncFunc));
  }
}

async function createUser(user: User[]) {
  await prisma.user.deleteMany();
  await batchesPromises(user, batchSize, async (user) => {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website,
        companyName: user.company.name,
        city: user.address.city,
        street: user.address.street,
        suite: user.address.suite,
        zipcode: user.address.zipcode,
      },
    });
  });
}
async function createPost(post: Post[]) {
  await prisma.post.deleteMany();
  await batchesPromises(post, batchSize, async (post) => {
    await prisma.post.create({
      data: {
        id: post.id,
        title: post.title,
        body: post.body,
        userId: post.userId,
      },
    });
  });
}
async function createTodo(todo: Todo[]) {
  await prisma.todo.deleteMany();
  await batchesPromises(todo, batchSize, async (todo) => {
    await prisma.todo.create({
      data: {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        userId: todo.userId,
      },
    });
  });
}
async function createComment(comment: Comment[]) {
  await prisma.comment.deleteMany();
  await batchesPromises(comment, batchSize, async (comment) => {
    await prisma.comment.create({
      data: {
        id: comment.id,
        email: comment.email,
        body: comment.body,
        postId: comment.postId,
      },
    });
  });
}

async function main() {
  await createUser(seedData.users);
  await createPost(seedData.posts);
  await createTodo(seedData.todos);
  await createComment(seedData.comments);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Successfully created");
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    console.log("Failed");
    process.exit(1);
  });
