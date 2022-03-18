const UsersModel = require("../models/users.model");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new UsersModel({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password1, 8),
    city: req.body.city,
    type: "user",
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin = (req, res) => {
  UsersModel.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) return res.status(404).send({ message: "User Not found." });

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      city: user.city,
      roles: user.role,
    });
  });
};
