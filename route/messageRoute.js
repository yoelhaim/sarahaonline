const routes = require("express").Router();
const { addMessage, allMessages } = require("../controller/messageController");

routes.post("/add", addMessage);
routes.get("/all/:id", allMessages);

module.exports = routes;
