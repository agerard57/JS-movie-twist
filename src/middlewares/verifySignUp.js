const UsersModel = require("../models/users.model");
const checkDuplicateUser = (req, res, next) => {
  const username = req.body.username;
  UsersModel.findOne({
    username: username,
  }).exec((err, user) => {
    if (err) {
      res.redirect("/login?msg=500");
      return;
    }
    if (user) {
      res.redirect(`/login?msg=duplicate&subject=${username}`);
      return;
    }
    next();
  });
};

const checkUsername = (req, res, next) => {
  const username = req.body.username;
  const illegalChars = /\W/; // Not word - Allow only letters, numbers, and underscores
  if (username === "") res.redirect("/login?msg=empty&subject=Username");
  else if (username.length < 5 || username.length > 30)
    res.redirect("/login?msg=length&subject=Username");
  else if (illegalChars.test(username)) res.redirect("/login?msg=illegalChars");
  else next();
};

const checkPassword = (req, res, next) => {
  const pwd = req.body.password1;
  if (pwd === "") res.redirect("/login?msg=empty&subject=Password");
  else if (pwd.length < 5 || pwd.length > 30)
    res.redirect("/login?msg=length&subject=Password");
  else next();
};

const verifySignUp = {
  checkDuplicateUser,
  checkUsername,
  checkPassword,
};

module.exports = verifySignUp;
