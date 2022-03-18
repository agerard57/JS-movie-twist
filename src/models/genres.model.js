const mongoose = require("mongoose");

var genreSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

genreSchema.index({ slug: 1, userid: 1 }, { unique: true });

var GenresModel = mongoose.model("genres", genreSchema);

module.exports = GenresModel;
