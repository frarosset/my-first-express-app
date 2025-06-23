// GET /books
// GET /books/:bookId
// GET /books/:bookId/reserve
// POST /books/:bookId/reserve

const { Router } = require("express");
const {
  getBookById,
  getBookReservationById,
  postBookReservationById,
} = require("../controllers/bookController.js");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books!"));

bookRouter.get("/:bookId", getBookById);

bookRouter
  .route("/:bookId/reserve")
  .get(getBookReservationById)
  .post(postBookReservationById);

module.exports = bookRouter;
