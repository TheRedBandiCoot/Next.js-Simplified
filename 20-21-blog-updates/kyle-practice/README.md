# Before Getting Started

The starting code for this project is very similar to the previous project. The only changes are as follows:

1. A new `prisma` folder has been added which includes all the code for the database we will be using with this project.
2. A new `src/db` folder has been added which includes all the functions for interfacing with the database. These are one to one mappings of all the functions in the `src/api` folder.
3. The `src/app/posts/page.tsx` route has been modified to include a search form that currently does nothing. The `loading.tsx` file has also been removed in favor of `Suspense` inside the `page.tsx` file.
4. A `.env` file has been added which includes the `DATABASE_URL` environment variable. This is for Prisma so it knows where our database is. You do not need to change this.
5. A new `FormGroup` component was added which is used by the `SearchForm` component.

The main goal of this project is to practice working with a database instead of `fetch` as well as practice working with search parameters. To get the database working you will need to run the following commands:

1. `npm or pnpm install` - This will install all the dependencies for the project.
2. `npx or pnpm dlx prisma migrate dev` - This will create the database and all the tables.
3. `npx or pnpm dlx prisma studio` - Watch dbs file live on <a href="http://localhost:5555">Prisma Studio</a>
4. `npm or pnpm run seed | npm or pnpm run seed-ts` - This will seed the database with data that is very similar to the data from the API.
5. You may need to run `npx prisma generate` if you get any errors about missing types. If this doesn't fix the typing errors just run the command `TypeScript: Restart TS Server` in the VSCode command palette or restart VSCode.
6. `npm run dev` - This will start the development server. There is no need for an API server anymore.

# Database Information

All the functions you need to access the database are already created in the `src/db` folder so you shouldn't need to directly interact with the database at all. You will need to make changes to the code in these files for some of the parts of this project, but you don't need to understand how Prisma works to make these changes.

# Instructions

1. Replace all the `fetch` calls in the `src/api` folder with calls to the database functions in the `src/db` folder. I manually added a 2 second delay to each database function call so you can still see your loading states.
2. Add a search form to the `src/app/posts/page.tsx` page that allows the user to search for posts by `title`/`body` and the `userId`.
   - This search form will most likely use a combination of the `searchParams` prop, the `useSearchParams` hook, and the `useRouter` hook to update the URL when the user submits the form.

# Bonus:

1. Ensure the user and posts data is loaded in parallel to ensure the `/posts` route is loaded as fast as possible.
2. Add caching for all the database calls so the results will be stored in the full page cache and the data cache.

# Additional ReadME:

Sure, here's a summarized version of our conversation, step by step:

### Setting up Prisma Seed Script

1. **Initial Prisma Seed Script**:

   - You provided a TypeScript script to seed your Prisma database with data from a JSON file (`seed.json`).
   - The script uses `PrismaClient` to insert users, todos, posts, and comments into the database.
   - The script works correctly with a `for` loop, but using `Promise.all` with `map` caused errors when handling large data sets.

2. **Handling Large Data Sets**:

   - You noticed that using `Promise.all` with a large number of data entries caused errors, likely due to limitations on your machine's processing power.
   - The `for` loop approach worked but was slower since it processed each entry sequentially.

3. **Adding TypeScript Types**:

   - You provided TypeScript types for `User`, `Post`, `Comment`, and `Todo`.
   - Types were added to ensure type safety and clarity in your TypeScript code.

4. **Simplifying the Seed Script Command**:

   - You initially used a long command to run the seed script:
     ```sh
     pnpm dlx ts-node --compiler-options "{\"module\":\"CommonJS\"}" prisma/seed.ts
     ```
   - You wanted to simplify this by adding a script to your `package.json`.

5. **Updating `package.json`**:

   - Added a script to `package.json` to simplify running the seed script:
     ```json
     "scripts": {
       "seed": "ts-node --compiler-options '{\\\"module\\\":\\\"CommonJS\\\"}' prisma/seed.ts"
     }
     ```

6. **Understanding the Syntax**:

   - Explained the use of escaped double quotes within the JSON string to avoid shell interpretation issues.
   - `{\\\"module\\\":\\\"CommonJS\\\"}` translates to `{"module":"CommonJS"}`.

7. **Using a `tsconfig.ts-node.json` File**:

   - Preferred approach to simplify configuration and avoid long command lines.
   - Created `tsconfig.ts-node.json`:
     ```json
     {
       "compilerOptions": {
         "module": "CommonJS",
         "resolveJsonModule": true,
         "esModuleInterop": true
       }
     }
     ```
   - Updated `package.json` to use this config file:
     ```json
     "scripts": {
       "seed": "ts-node --project tsconfig.ts-node.json prisma/seed.ts"
     }
     ```

8. **Explanation of `tsconfig.ts-node.json` Options**:
   - **"module": "CommonJS"**: Ensures compatibility with Node.js using CommonJS module syntax.
   - **"resolveJsonModule": true**: Allows importing JSON files directly in TypeScript.
   - **"esModuleInterop": true**: Provides better interoperability between CommonJS and ES modules.

### Summary of Key Points

- **Prisma Seed Script**: Used to populate the database with initial data.
- **TypeScript Types**: Added for `User`, `Post`, `Comment`, and `Todo` for type safety.
- **Command Simplification**: Added a script in `package.json` to run the seed script more easily.
- **Configuration File (`tsconfig.ts-node.json`)**: Used to manage TypeScript compiler options, making the setup cleaner and easier to manage.
- **Key Compiler Options**:
  - **"module": "CommonJS"**: For Node.js compatibility.
  - **"resolveJsonModule": true**: For importing JSON files.
  - **"esModuleInterop": true**: For better module interoperability.

This summary should provide you with a comprehensive overview of our discussion, allowing you to create detailed notes for your project.
