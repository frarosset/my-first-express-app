require("dotenv").config();
const express = require("express");

const indexRouter = require("./routes/indexRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const messagesRouter = require("./routes/messagesRouter.js");
const sessionRouter = require("./routes/sessionRouter.js");

const models = require("./models/index.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get a pseudo-authenticated user
app.use((req, res, next) => {
  req.context = { models, me: models.users[1] };
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
app.use("/session", sessionRouter);

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`),
);
