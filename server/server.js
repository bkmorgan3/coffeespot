const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const cafeController = require("./controllers/cafeController");

app.use(bodyParser.json());

app.get("/api/cafes", cafeController.getCafes, (req, res) => {
  res.status(200).json({ coffeeHouses: res.locals.coffeeHouses });
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server is listening on Port ${PORT}`);
});
