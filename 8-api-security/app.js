const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => res.json({ message: "Welcome to the API" }));

app.post("/api/posts", verifyToken, (req, res) => {
  console.log(req.token);
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Post created...", authData });
    }
  });
});

app.post("/api/login", (req, res) => {
  // mock user
  const user = {
    id: 1,
    username: "johndoe",
    email: "johndoe@example.com",
  };

  jwt.sign({ user: user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
    res.json({ token: token });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

function verifyToken(req, res, next) {
  // Get the auth header value
  const bearerHeader = req.headers["authorization"];

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get the token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

  next();
}

app.listen(5000, () => console.log("Server started on port 5000"));
