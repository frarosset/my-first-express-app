// GET /
// GET /about
// GET /contact
// POST /contact

// GET /books
// GET /books/:bookId
// GET /books/:bookId/reserve
// POST /books/:bookId/reserve

// GET /authors
// GET /authors/:authorId

// Sample URLS:-----------------------

// http://localhost:3000/
// http://localhost:3000/about
// http://localhost:3000/contact
// http://localhost:3000/contact

// http://localhost:3000/books
// http://localhost:3000/books/SampleBookTitle
// http://localhost:3000/books/SampleBookTitle/reserve
// http://localhost:3000/books/SampleBookTitle/reserve

// http://localhost:3000/authors
// http://localhost:3000/authors/sampleAuthorName

require("dotenv").config();
const express = require("express");

const app = express();

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const authorRouter = require("./routes/authorRouter.js");
const bookRouter = require("./routes/bookRouter.js");
const indexRouter = require("./routes/indexRouter.js");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter); // This has to be specified last

// Error handling
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message);
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
