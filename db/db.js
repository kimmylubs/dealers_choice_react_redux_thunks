const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme-react-redux"
);

const Tea = sequelize.define("tea", {
  name: Sequelize.STRING,
});
const Topping = sequelize.define("topping", {
  name: Sequelize.STRING,
});
const Milk = sequelize.define("milk", {
  name: Sequelize.STRING,
});

// const adj = ['Green', 'Black', 'Oolong', 'Lychee', 'Rose', 'White', 'Herbal', 'Yellow', 'Blue', 'Guayusa', 'Puerh', 'Chamomile', 'Ginger', 'Hibisuc', 'Lemon', 'PassionFlower', 'Peppermint', 'Exhiancea', 'Rooibos', 'Rosehip', 'Chai', 'Dandelion', 'ElderBerry'];

// function generator() {
//  return adj[Math.floor(Math.random() * adj.length)];;;
// }

// Tea.generateRandom = function () {
//   const name = generator();
//   return this.create({ name});
// };


const syncAndSeed = async () => {
  await sequelize.sync({ force: true });
  await Promise.all([
    Tea.create({ name: "Green" }),
    Tea.create({ name: "Black" }),
    Tea.create({ name: "White" }),
    Tea.create({ name: "Oolong" }),
  ]),
    await Promise.all([
      Topping.create({ name: "Tapioca" }),
      Topping.create({ name: "Peach Jelly" }),
      Topping.create({ name: "Sago" }),
      Topping.create({ name: "Aloe" }),
    ]),
    await Promise.all([
      Milk.create({ name: "Whole" }),
      Milk.create({ name: "Skim" }),
      Milk.create({ name: "Almond" }),
      Milk.create({ name: "Oat" }),
    ]);
};

module.exports = {
  syncAndSeed,
  models: {
    Tea,
    Topping,
    Milk,
  },
};
