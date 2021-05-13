const { users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const addusers = async (req, res, next) => {
  try {
    const checkUsersEmail = await users.findAll({
      where: { email: req.body.email },
    });
    const checkUsersLink = await users.findAll({
      where: { link_profile: req.body.link_profile },
    });
    if (checkUsersLink.length > 0) {
      res.json({
        code: 1001,
        message: "error link  already exit",
      });
    } else if (checkUsersEmail.length > 0) {
      res.json({
        code: 1002,
        message: "error email  already exit",
      });
    } else {
      const body = req.body;
      await users
        .create(body)
        .then((result) => {
          res.json({
            message: "succefully create",
            data: result,
          });
        })
        .catch((err) => {
          next(createError.Forbidden(err));
        });
    }
  } catch (error) {
    next(createError.Forbidden(error));
  }
};

module.exports = { addusers };
