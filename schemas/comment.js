const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

function getCurrentDate() {
  const result = new Date().toLocaleString().substring(0, 20);
  return result;
}

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  comment: String,

  createdAt: {
    type: String,
    default: getCurrentDate(),
  },
});

module.exports = mongoose.model("Comment", commentSchema);
