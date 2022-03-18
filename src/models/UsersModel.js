const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  city: String,
});

userSchema.index({ slug: 1, userid: 1 }, { unique: true });

var UsersModel = mongoose.model("users", userSchema);

module.exports = UsersModel;
