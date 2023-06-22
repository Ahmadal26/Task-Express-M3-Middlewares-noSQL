const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  Image: String,
});

module.exports = model("Post", PostSchema);
