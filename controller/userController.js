const { users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const addusers = async (req, res, next) => {
  try {
    const checkUsersEmail = await users.findAll({
      where: { email: req.body.email },
    });
    const checkUsersLink = await users.findAll({
      where: { link_profile: req.body.email },
    });
    if (checkUsersLink.length < 1) {
      res.send("link false");
    }
    if (checkUsersEmail.length < 1) {
      res.send("email false");
    } else {
      const body = req.body;
      await users
        .create(body)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addusers };
