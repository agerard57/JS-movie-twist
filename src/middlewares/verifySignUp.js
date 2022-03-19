const UsersModel = require("../models/users.model");
const checkDuplicateUsername = (req, res, next) => {
  UsersModel.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.redirect("/login?msg=500");
      return;
    }
    if (user) {
      res.redirect("/login?msg=duplicate");
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateUsername,
};

module.exports = verifySignUp;
