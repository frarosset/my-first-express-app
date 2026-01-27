const { Router } = require("express");
const usersController = require("../controllers/usersController.js");

const usersRouter = Router();

usersRouter.get("/", usersController.get);
usersRouter.post("/", usersController.post);
usersRouter.put("/", usersController.put);
usersRouter.delete("/", usersController.delete);

usersRouter.get("/:userId", usersController.getId);
usersRouter.put("/:userId", usersController.putId);
usersRouter.delete("/:userId", usersController.deleteId);

module.exports = usersRouter;
