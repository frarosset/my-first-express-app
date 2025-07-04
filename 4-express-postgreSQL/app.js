const express = require("express");
const path = require("node:path");
const app = express();
const usernameRouter = require("./routes/usernameRouter");
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: "true" }));

app.use("/", usernameRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
