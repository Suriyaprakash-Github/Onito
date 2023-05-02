const Sequelize = require("sequelize");
const sequelize = new Sequelize("onito", "root", "1@mLegend", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
