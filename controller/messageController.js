const { users, message } = require("../models");
const createError = require("http-errors");
const addMessage = async (req, res, next) => {
  try {
    const body = req.body;
    await message.create(body).then((resul) => {
      res
        .json({
          code: 200,
          message: "succefully add  message",
        })
        .catch((err) => next(createError.Forbidden(err.message)));
    });
  } catch (error) {
    next(createError.Forbidden(error.message));
  }
};
const allMessages = async (req, res, next) => {
  let data = await message.findAll({
    where: { userId: req.params.id },
  });
  res.send(data);
};

module.exports = { addMessage, allMessages };
