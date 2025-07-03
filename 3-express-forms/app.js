const express = require("express");
const path = require("node:path");
const app = express();
const userRouter = require("./routes/userRouter");
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
