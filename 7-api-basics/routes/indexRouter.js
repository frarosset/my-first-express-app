const { Router } = require("express");
const indexController = require("../controllers/indexController.js");

const indexRouter = Router();

indexRouter.get("/", indexController.get);
indexRouter.post("/", indexController.post);
indexRouter.put("/", indexController.put);
indexRouter.delete("/", indexController.delete);

module.exports = indexRouter;
