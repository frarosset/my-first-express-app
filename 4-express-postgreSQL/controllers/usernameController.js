const db = require("../db/queries");

exports.get = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", {
    title: "Top users",
    text: "Usernames: " + usernames.map((user) => user.username).join(", "),
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
