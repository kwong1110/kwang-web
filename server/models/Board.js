const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Board = mongoose.model("Board", boardSchema);

module.exports = { Board };
