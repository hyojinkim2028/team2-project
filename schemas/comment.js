const mongoose = require("mongoose");
const { runtime } = require("nunjucks");
const { Schema } = mongoose;

function getCurrentTime() {
  date = new Date();
  curruntTime = date.toLocaleString();
  return curruntTime;
}

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  comment: String,

  password: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: String,
    default: getCurrentTime,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
