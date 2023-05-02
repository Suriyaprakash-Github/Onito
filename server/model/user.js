const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  idtype: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  idvalue: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  guardianName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  emergencyNumber: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "India",
  },
  pincode: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  occupation: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  religion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  maritalStatus: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  blood: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nationality: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "Indian",
  },
});
module.exports = User;
