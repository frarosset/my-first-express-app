import { prisma } from "./lib/prisma.js";

const rnd = Math.round(Math.random() * 10000);

async function main() {
  // Create a new user with a post
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: `alice_${rnd}@prismaa.io`,
      posts: {
        create: {
          title: "Hello World",
          content: "This is my first post!",
          published: true,
        },
      },
    },
    include: { posts: true },
  });
  console.log("Created user: ", user);

  const user2 = await prisma.user.create({
    data: {
      email: `ariadne_${rnd}@prisma.io`,
      name: "Ariadne",
      posts: {
        create: [
          {
            title: "My first day at Prisma",
            categories: {
              create: {
                name: "Office",
              },
            },
          },
          {
            title: "How to connect to a SQLite database",
            categories: {
              create: [{ name: "Databases" }, { name: "Tutorials" }],
            },
          },
        ],
      },
    },
  });

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });
  console.log("All users: ", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
