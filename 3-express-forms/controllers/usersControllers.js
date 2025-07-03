const userStorage = require("../storages/usersStorage");
const { body, validationResult } = require("express-validator");

const maxLen = 10;
const alphaErr = "must only contain letters";
const lengthErr = `must be between 1 and ${maxLen} characters`;

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: maxLen })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: maxLen })
    .withMessage(`Last name ${lengthErr}`),
];

exports.usersListGet = (req, res) => {
  res.render("index", { title: "User list", users: userStorage.getUsers() });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", { title: "Create user" });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("createUser", { title: "Create user", errors: errors.array() });
    }

    const { firstName, lastName } = req.body;
    userStorage.addUser({ firstName, lastName });
    res.redirect("/");
  },
];

exports.usersUpdateGet = (req, res) => {
  const user = userStorage.getUser(req.params.id);
  res.render("updateUser", { title: "Update user", user: user });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = userStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    userStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  },
];

exports.usersDeletePost = (req, res) => {
  userStorage.deleteUser(req.params.id);
  res.redirect("/");
};
