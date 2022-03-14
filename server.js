const express = require("express");
const { static } = express;
const path = require("path");
const { syncAndSeed, models: {Tea, Topping, Milk} } = require("./db/db");

const app = express();

//body parsar
app.use(express.json());

app.use("/dist", static(path.join(__dirname, "dist")));

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/api/teas", async (req, res, next) => {
  try {
    res.send(await Tea.findAll());
  } catch (e) {
    next(e);
  }
});

app.get("/api/toppings", async (req, res, next) => {
  try {
    res.send(await Topping.findAll());
  } catch (e) {
    next(e);
  }
});

app.get("/api/milks", async (req, res, next) => {
  try {
    res.send(await Milk.findAll());
  } catch (e) {
    next(e);
  }
});

const init = async () => {
  try {
    await syncAndSeed();
  } catch (e) {
    next(e);
  }
};

init();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));