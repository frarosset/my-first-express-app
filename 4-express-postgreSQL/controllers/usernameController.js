exports.get = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.render("index", { title: "Top users" });
};

exports.newGet = (req, res) => {
  res.render("new", { title: "New user" });
};

exports.newPost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/");
};
