const mongoose = require("mongoose");
const { runtime } = require("nunjucks");

const { Schema } = mongoose;
// const {
//   Types: { ObjectId },
// } = Schema;

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

  createdAt: 
    type: String,
    default: new Date.tolocaleString(),
  },
});

module.exports = mongoose.model("Comment", commentSchema);
