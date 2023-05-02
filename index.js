const express = require("express");
const chef = require('./data/chef.json');
const recipes = require("./data/recipes.json");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("App was running");
});

app.get('/chef', (req, res) => {
  res.send(chef);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const foundChef = chef.find((c) => c.id === id);
  res.send(foundChef);
})



app.listen(port, () => {
  console.log(`App Listing on running port ${port}`);
});