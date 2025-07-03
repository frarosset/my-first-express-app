// This class is to simulate interacting with a database

class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;

    data.forEach((userData) => this.addUser(userData));
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  searchUser(name, email) {
    const findName = name != null;
    const findEmail = email != null;
    const findBoth = findName && findEmail;

    const res = Object.values(this.storage).filter((itm) => {
      const matchName =
        findName &&
        (itm.firstName.toLowerCase().includes(name.toLowerCase()) ||
          itm.lastName.toLowerCase().includes(name.toLowerCase()) ||
          `${itm.firstName} ${itm.lastName}`
            .toLowerCase()
            .includes(name.toLowerCase()));

      const matchEmail =
        findEmail && itm.email.toLowerCase().includes(email.toLowerCase());

      return findBoth ? matchName && matchEmail : matchName || matchEmail;
    });

    return res;
  }
}

// populate the db with sample data
const data = [
  {
    firstName: "Cody",
    lastName: "Dog",
    email: "cody@dog.com",
    age: 6,
    bio: "I'm a cute little dog!",
  },
  {
    firstName: "Lucky",
    lastName: "Dog",
    email: "lucky@dog.com",
    age: 24,
    bio: "I'm a cute little dog!",
  },
  {
    firstName: "Citiri",
    lastName: "Dog",
    email: "citiy@dog.com",
    age: 9,
    bio: "I'm a cute little dog!",
  },
  {
    firstName: "Milo",
    lastName: "Cat",
    email: "milo@cat.com",
    age: 5,
    bio: "I'm a little panther!",
  },
  {
    firstName: "Fufi",
    lastName: "Cat",
    email: "fufi@cat.com",
    age: 18,
    bio: "I'm a cute little cat!",
  },
  ,
  {
    firstName: "Fufetta",
    lastName: "Cat",
    email: "fufi@cat.com",
    age: 3,
    bio: "I'm a little panther!",
  },
];

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
