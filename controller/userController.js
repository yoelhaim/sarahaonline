const { users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const addusers = async (req, res, next) => {
  const email = req.body.email.trim();
  const linkProfile = req.body.link_profile.trim().replace(" ", "");
  try {
    if (
      email === "" ||
      req.body.password.trim() === "" ||
      req.body.fullname.trim() === "" ||
      req.body.link_profile.trim() === ""
    ) {
      throw createError.Forbidden("error is empty");
    }
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
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
          next(createError.Forbidden("error password hash"));
        } else {
          if (!req.files) {
            avatar = "not";
          } else {
            let getRandomInt = Date.now();
            let avatar;
            avatar = req.files.avatar;
            avatar = getRandomInt + avatar.name;
            req.files.avatar.mv("./uploads/" + avatar);
          }
          await users
            .create({
              fullname: req.body.fullname,
              email: req.body.email,
              password: hash,
              link_profile: req.body.link_profile,
              img_profile: avatar,
            })
            .then((result) => {
              const token = jwt.sign(
                { email: result.email, fullname: result.fullname },
                "saraaha",
                {
                  expiresIn: 86400, // expires in 24 hours
                }
              );
              res.json({
                code: 200,
                message: "succefully create",
                fullname: result.fullname,
                email: result.email,
                id: result.id,
                link: result.link_profile,
                img_profile: result.img_profile,
                token: token,
              });
            })
            .catch((err) => {
              next(createError.Forbidden(err.message));
            });
        }
      });
    }
  } catch (error) {
    next(error);
  }
};
const signIn = async (req, res, next) => {
  try {
    let email = req.body.email.trim();
    const checkLogin = await users.findAll({
      where: { email: email },
    });
    if (checkLogin.length > 0) {
      bcrypt.compare(
        req.body.password,
        checkLogin[0].password,
        async (err, result) => {
          if (err) return next(createError.Forbidden(err));
          else if (result) {
            const token = jwt.sign(
              {
                email: checkLogin[0].email,
                fullname: checkLogin[0].fullname,
              },
              "saraaha",
              {
                expiresIn: 86400, // expires in 24 hours
              }
            );
            return res.json({
              code: 200,
              message: "succefully create",
              fullname: checkLogin[0].fullname,
              email: checkLogin[0].email,
              id: checkLogin[0].id,
              link: checkLogin[0].link_profile,
              img_profile: checkLogin[0].img_profile,
              token: token,
            });
          } else {
            return next(createError.Forbidden("error password"));
          }
        }
      );
    } else {
      return next(createError.Forbidden("error find account"));
    }
  } catch (error) {
    next(createError.Forbidden(error));
  }
};
const getuser = async (req, res, next) => {
  try {
    // if (parseInt(req.params.id != req.user.id))
    //   throw createError.Forbidden("no permission");
    let user = await users.findOne({
      where: { link_profile: req.params.id },
      attributes: { exclude: ["password"] },
    });
    res.send(user);
  } catch (error) {
    next(createError.Forbidden(error));
  }
};
const updateImage = async (req, res, next) => {
  try {
    let avatar;
    if (!req.files) {
      avatar = "not";
    } else {
      let getRandomInt = Date.now();

      avatar = req.files.avatar;
      console.log("hhhhhhhhh " + avatar.name);
      avatar = getRandomInt + avatar.name;
      req.files.avatar.mv("./uploads/" + avatar);
    }
    let update = await users
      .update(
        {
          img_profile: avatar,
        },
        {
          where: { id: req.params.id },
        }
      )
      .then((resu) => {
        res.json({
          message: "succes",
        });
      })
      .catch((errs) => {
        next(createError.Forbidden(errs.message));
      });
  } catch (error) {
    next(createError.Forbidden(error.message));
  }
};

module.exports = { addusers, signIn, getuser, updateImage };
