const { Router } = require("express");
const messagesController = require("../controllers/messagesController.js");

const messagesRouter = Router();

messagesRouter.get("/", messagesController.get);
messagesRouter.post("/", messagesController.post);

messagesRouter.get("/:messageId", messagesController.getId);
messagesRouter.delete("/:messageId", messagesController.deleteId);
messagesRouter.put("/:messageId", messagesController.putId);

module.exports = messagesRouter;
