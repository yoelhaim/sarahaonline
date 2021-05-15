const jwt = require("jsonwebtoken");
const { users } = require("../models");
const createError = require("http-errors");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")["1"];
    const decode = jwt.verify(token, "saraaha");
    emails = decode.email;
    const user = await users.findOne({ where: { email: emails } });
    req.user = user;
    next();
  } catch (error) {
    next(createError.Unauthorized("token expired"));
  }
};
