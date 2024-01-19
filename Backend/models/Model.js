const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  price: String,
  desc: String,
  id: String,
  imgSrc: String,
});

const Cake = mongoose.model("Cakes", schema);
module.exports = Cake;
