const { Pool } = require("pg");

// module.exports = new Pool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   database: process.env.DATABASE_DATABASE,
//   password: process.env.DATABASE_PASSWORD,
//   port: process.env.DATABASE_PORT,
// });

// or:
module.exports = new Pool({
  connectionString: process.env.DATABASE_CONNECTION_URI,
});
