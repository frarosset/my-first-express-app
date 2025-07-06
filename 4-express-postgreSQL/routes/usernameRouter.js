const { Router } = require("express");
const usernameController = require("../controllers/usernameController");

const usernameRouter = Router();

usernameRouter.get("/", usernameController.get);
usernameRouter.get("/new", usernameController.newGet);
usernameRouter.post("/new", usernameController.newPost);
usernameRouter.post("/delete", usernameController.deletePost);
usernameRouter.get("/search", usernameController.searchGet);

module.exports = usernameRouter;
