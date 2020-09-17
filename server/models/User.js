const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 100,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(require("../methods/user"));
//require("../methods/user")(userSchema);

const User = mongoose.model("User", userSchema);

module.exports = { User };
