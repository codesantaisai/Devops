const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const name = "Jathurshan";

app.get("/", (req, res) => {
  const message = `Hello, World! Welcome to my world maame! ${name}.`;
  res.send(message);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = { app, server, name };
