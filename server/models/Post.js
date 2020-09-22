const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 50,
  },
  content: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
  },
  githubURL: {
    type: String,
  },
  siteURL: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
