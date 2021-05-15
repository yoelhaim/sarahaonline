const { users, message } = require("../models");
const createError = require("http-errors");
const addMessage = async (req, res, next) => {
  try {
    const userId = await users.findAll({
      where: { link_profile: req.body.userId },
    });
    const body = req.body;
    await message
      .create({
        message: req.body.message,
        userId: userId[0].id,
      })
      .then((resul) => {
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
  try {
    if (req.user.id != parseInt(req.params.id))
      throw createError.Forbidden("error permission user");
    let data = await message.findAll({
      where: { userId: req.params.id },
      order: [["id", "DESC"]],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { addMessage, allMessages };
