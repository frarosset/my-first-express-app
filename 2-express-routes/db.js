// mock database and query function to be called by the controller

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id == authorId);
}

module.exports = { getAuthorById };
