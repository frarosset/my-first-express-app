const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Index page"));

indexRouter.get("/about", (req, res) =>
  res.render("aboutView", { today: new Date(), year: 2025 })
);

indexRouter
  .route("/contact")
  .get((req, res) => res.send("Contacts"))
  .post((req, res) => res.send("Contacts posted"));

module.exports = indexRouter;
