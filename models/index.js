const sequelize = require("sequelize");
const db = require("../config/database");
const userModel = require("./usersModel");

const users = userModel(db, sequelize);

db.sync({
  force: false,
})
  .then((result) => {
    console.log("success created");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = { users };
