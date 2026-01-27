const { Router } = require("express");
const sessionController = require("../controllers/sessionController.js");

const sessionRouter = Router();

sessionRouter.get("/", sessionController.get);

module.exports = sessionRouter;
