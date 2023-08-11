const mongoose = require("mongoose");
const { runtime } = require("nunjucks");
const { Schema } = mongoose;

function addZero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

function getCurrentTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = addZero(date.getMonth() + 1);
  var day = addZero(date.getDate());
  var hour = addZero(date.getHours());
  var minute = addZero(date.getMinutes());

  var currentTime =
    year + "년" + month + "월" + day + "일" + hour + "시" + minute + "분";
  return currentTime;
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
    default: getCurrentTime,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
