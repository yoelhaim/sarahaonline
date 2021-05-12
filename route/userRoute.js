const routes = require("express").Router();
const { addusers } = require("../controller/userController");

routes.post("/add", addusers);

module.exports = routes;
