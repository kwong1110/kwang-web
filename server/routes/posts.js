const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.post("/", (req, res) => {
  let postType = req.body.postType;
  let page = req.body.page;
  let limit = req.body.limit ? parseInt(req.body.limit) : 5;
  let skip = parseInt((page - 1) * 2);
  Post.countDocuments({ type: postType }, (err, count) => {
    if (err) return res.json({ success: false, err });

    let maxPage = Math.ceil(count / limit);
    Post.find({ type: postType })
      .populate("writer")
      .sort({ createDate: -1 })
      .skip(skip)
      .limit(limit)
      .exec((err, posts) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true,
          posts: posts,
          maxPage: maxPage,
        });
      });
  });
});

module.exports = router;
