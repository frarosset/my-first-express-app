const { Router } = require("express");
const usernameController = require("../controllers/usernameController");

const usernameRouter = Router();

usernameRouter.get("/", usernameController.get);
usernameRouter.get("/new", usernameController.newGet);
usernameRouter.post("/new", usernameController.newPost);

module.exports = usernameRouter;
