// mock database and query function to be called by the controller

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  { id: 1, name: "Hello World!", reserved: false },
  { id: 2, name: "Learn Javascript", reserved: true },
  { id: 3, name: "Harry Potter" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id == authorId);
}

async function getBookById(bookId) {
  return books.find((book) => book.id == bookId);
}

async function toggleBookReservedById(bookId) {
  const book = books.find((book) => book.id == bookId);

  if (book) {
    book.reserved = !book.reserved;
  }

  return book;
}

module.exports = {
  getAuthorById,
  getBookById,
  toggleBookReservedById,
};
