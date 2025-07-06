const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function clearAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

async function searchUsernames(search) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE upper(username) LIKE upper('%' || $1 || '%')",
    [search]
  );
  return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  clearAllUsernames,
  searchUsernames,
};
