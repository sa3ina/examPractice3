const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bd6zv16m3:exam@exam4.56wxuyb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected mongodb"))
  .catch((err) => console.log("err", err));
