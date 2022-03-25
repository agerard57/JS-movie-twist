const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

genreSchema.index({ id: 1 }, { unique: true });

const GenresModel = mongoose.model("genres", genreSchema);

module.exports = GenresModel;
