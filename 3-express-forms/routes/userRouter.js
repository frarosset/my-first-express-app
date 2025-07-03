const { Router } = require("express");
const userController = require("../controllers/usersControllers");
const userRouter = Router();

userRouter.get("/", userController.usersListGet);
userRouter.get("/create", userController.usersCreateGet);
userRouter.post("/create", userController.usersCreatePost);

module.exports = userRouter;
