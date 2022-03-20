const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: "true" },
    password: {
      type: String,
      required: true,
      get: (pwd) => pwd.replace(/./g, "*"),
    },
    city: { type: String, set: (city) => city.toUpperCase() },
    type: { type: String, default: "user" },
  },
  { toJSON: { getters: true } }
);

userSchema.index({ username: 1 }, { unique: true });

userSchema.plugin(uniqueValidator);

var UsersModel = mongoose.model("users", userSchema);

module.exports = UsersModel;
