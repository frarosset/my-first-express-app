// #! /use/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS usernames (
        id  INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255)
    
    );

    INSERT INTO usernames (username)
    VALUES
       ('Bryan'),
       ('Odin'),
       ('Damon')
`;

const connectionString =
  process.argv.length > 2
    ? process.argv[2]
    : process.env.DATABASE_CONNECTION_URI;

async function main() {
  console.log("seeding ...");
  const client = new Client({
    connectionString: connectionString,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
}

main();
