import { unstable_cache } from 'next/cache';
import prisma from './db';
import { cache } from 'react';

export const getUsers = unstable_cache(
  cache(async (isUser?: boolean) => {
    await wait(2000);
    if (isUser) {
      // console.log('data received from UserSelectOptions Component');
      return [];
    }
    // console.log('data received from Edit Page');

    return prisma.user.findMany();
  }),
  ['users']
);

export const getUser = unstable_cache(
  cache(async (userId: string | number) => {
    await wait(2000);
    return prisma.user.findUnique({ where: { id: Number(userId) } });
  }),
  ['user', 'userId']
);

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
