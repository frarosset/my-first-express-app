const db = require("../db/queries");

exports.get = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", {
    title: "Top users",
    text: usernames.map((user) => user.username).join(", "),
  });
};

exports.newGet = (req, res) => {
  res.render("new", { title: "New user" });
};

exports.newPost = async (req, res) => {
  const { username } = req.body;
  console.log("username to be saved: ", req.body.username);
  await db.insertUsername(username);
  res.redirect("/");
};

exports.deletePost = async (req, res) => {
  await db.clearAllUsernames();
  res.redirect("/");
};

exports.searchGet = async (req, res) => {
  const { search } = req.query;
  const usernames = await db.searchUsernames(search);
  res.render("search", {
    title: `Search results for: ${search}`,
    text: usernames.map((user) => user.username).join(", "),
  });
};
