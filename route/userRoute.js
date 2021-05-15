const routes = require("express").Router();
const {
  addusers,
  signIn,
  getuser,
  updateImage,
} = require("../controller/userController");

routes.post("/add", addusers);
routes.post("/signin", signIn);
routes.get("/user/:id", getuser);
routes.post("/image/:id", updateImage);

module.exports = routes;
