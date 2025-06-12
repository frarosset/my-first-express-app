// GET /books
// GET /books/:bookId
// GET /books/:bookId/reserve
// POST /books/:bookId/reserve

const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books!"));

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

bookRouter
  .route("/:bookId/reserve")
  .get((req, res) => {
    const { bookId } = req.params;
    res.send(`Reservation for Book ID: ${bookId}`);
  })
  .post((req, res) => {
    const { bookId } = req.params;
    res.send(`Reservation SENT for Book ID: ${bookId}`);
  });

module.exports = bookRouter;
