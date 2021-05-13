const routes = require("express").Router();
const { addusers, signIn } = require("../controller/userController");

routes.post("/add", addusers);
routes.post("/signin", signIn);

module.exports = routes;
