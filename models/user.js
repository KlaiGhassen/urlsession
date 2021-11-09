const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});
module.exports = mongoose.model("user", userSchema);
