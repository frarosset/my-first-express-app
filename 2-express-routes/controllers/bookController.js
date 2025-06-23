const db = require("../db.js");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found!");
  }

  res.send(`Book Name: ${book.name}`);
});

const getBookReservationById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found!");
  }

  res.send(
    `Book Name: ${book.name} <br/>Status:  ${
      book.reserved ? "RESERVED" : "AVAILABLE"
    }`
  );
});

const postBookReservationById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.toggleBookReservedById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found!");
  }

  res.send(
    `Book Name: ${book.name} <br/>New Status:  ${
      book.reserved ? "RESERVED" : "AVAILABLE"
    }`
  );
});

module.exports = {
  getBookById,
  getBookReservationById,
  postBookReservationById,
};
