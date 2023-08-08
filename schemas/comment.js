const mongoose = require("mongoose");
const { runtime } = require("nunjucks");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

function getCurrentDate() {
  const result = new Date().toLocaleString("ko-KR").substring(0, 20);
  if (result[result.length - 1] == ":") {
    return new Date().toLocaleString("ko-KR").substring(0, 19);
  } else {
    return result;
  }
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
  }, //

  createdAt: {
    type: String,
    default: getCurrentDate(),
  },
});

module.exports = mongoose.model("Comment", commentSchema);
