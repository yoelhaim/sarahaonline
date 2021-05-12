require("dotenv").config();
module.exports = {
  development: {
    database: process.env.DB_DBS,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    lognin: false,
  },
};
