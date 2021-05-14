const sequelize = require("sequelize");
const db = require("../config/database");
const userModel = require("./usersModel");
const MessageModel = require("./messageModel");

const users = userModel(db, sequelize);
const message = MessageModel(db, sequelize);
message.belongsTo(users);
db.sync({
  force: false,
})
  .then((result) => {
    console.log("success created");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = { users, message };
