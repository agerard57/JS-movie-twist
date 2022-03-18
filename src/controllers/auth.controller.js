const UsersModel = require("../models/users.model");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new UsersModel({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password1, 8),
    city: req.body.city,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    // TODO Add redirection page once user created (or even toasts)
    res.redirect("/login");
  });
};

exports.login = (req, res) => {
  UsersModel.findOne({
    username: req.body.inputLoginUsername,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) return res.status(404).send({ message: "User Not found." });

    var passwordIsValid = bcrypt.compareSync(
      req.body.inputLoginPassword,
      user.password
    );
    if (!passwordIsValid)
      return res.status(401).send({
        message: "Invalid Password!",
      });

    var username = encodeURIComponent(user.username);
    var city = encodeURIComponent(user.city);
    var type = encodeURIComponent(user.type);
    const remember =
      req.body.remember === "remember-me"
        ? encodeURIComponent("true")
        : encodeURIComponent("false");

    res.redirect(
      `/?user=${username}&city=${city}&type=${type}&remember=${remember}`
    );
  });
};
