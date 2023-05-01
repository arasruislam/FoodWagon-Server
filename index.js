const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("App was running");
});

app.listen(port, () => {
  console.log(`App Listing on running port ${port}`);
});