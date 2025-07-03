const userStorage = require("../storages/usersStorage");
const { body, validationResult } = require("express-validator");

const maxLen = 10;
const minAge = 18;
const maxAge = 120;
const maxBioLen = 120;
const requiredErr = "is required";
const alphaErr = "must only contain letters";
const lengthErr = `must be between 1 and ${maxLen} characters`;

const validateUser = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage(`First name ${requiredErr}`)
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: maxLen })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage(`Last name ${requiredErr}`)
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: maxLen })
    .withMessage(`Last name ${lengthErr}`),
  body("email")
    .trim()
    .notEmpty()
    .withMessage(`Email ${requiredErr}`)
    .isEmail()
    .withMessage("Invalid email"),
  body("age")
    .trim()
    .optional({ values: "falsy" })
    .isInt({ min: minAge, max: maxAge })
    .withMessage(`Age integer between ${minAge} and ${maxAge}`),
  body("bio")
    .trim()
    .optional({ values: "falsy" })
    .isLength({ max: maxBioLen })
    .withMessage(`Bio must be at most ${maxBioLen} characters`),
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

    const { firstName, lastName, email, age, bio } = req.body;
    userStorage.addUser({ firstName, lastName, email, age, bio });
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
    const { firstName, lastName, email, age, bio } = req.body;
    userStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    });
    res.redirect("/");
  },
];

exports.usersDeletePost = (req, res) => {
  userStorage.deleteUser(req.params.id);
  res.redirect("/");
};
