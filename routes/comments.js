const express = require("express");
const Comment = require("../schemas/comment");
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const comments = await Comment.find({});
      res.json(comments);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }) //댓글 작성
  .post(async (req, res, next) => {
    try {
      const comment = await Comment.create({
        name: req.body.name,
        comment: req.body.comment,
        password: req.body.password, //
      });
      console.log(comment);
      res.status(201).json(comment);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

// 댓글 수정
router
  .route("/:id")
  .patch(async (req, res, next) => {
    try {
      const result = await Comment.updateOne(
        {
          _id: req.params.id, //
        },
        {
          comment: req.body.comment,
        }
      );
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await Comment.deleteOne({
        _id: req.params.id,
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
