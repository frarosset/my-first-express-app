const { Router } = require("express");
const userController = require("../controllers/usersControllers");
const userRouter = Router();

userRouter.get("/", userController.usersListGet);
userRouter.get("/create", userController.usersCreateGet);
userRouter.post("/create", userController.usersCreatePost);
userRouter.get("/:id/update", userController.usersUpdateGet);
userRouter.post("/:id/update", userController.usersUpdatePost);
userRouter.post("/:id/delete", userController.usersDeletePost);

module.exports = userRouter;
