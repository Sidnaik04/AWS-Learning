const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to AWS tutorial");
});

app.get("/health", (req, res) => {
  res.send("Everything is OK");
});

app.listen(8080, () => console.log("Server is listening on Port 8080"));
