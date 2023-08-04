const express = require("express");
const User = require("../schemas/user");
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }) //댓글 작성
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        name: req.body.name,
        comment: req.body.comment, //
      });
      console.log(user);
      res.status(201).json(user);
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
      const result = await User.updateOne(
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
      const result = await User.deleteOne({
        _id: req.params.id,
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
