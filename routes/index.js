const express = require("express");
const Comment = require("../schemas/comment");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find({});
    res.render("index", { comments });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
