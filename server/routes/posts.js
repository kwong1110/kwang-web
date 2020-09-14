const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.get("/:postType/:page", (req, res) => {
  // console.log(req.params.postType);
  let postType = req.params.postType;
  let page = parseInt(req.params.page, 10);
  let limit = req.limit ? parseInt(req.body.limit, 10) : 5;
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
        return res.status(200).json({
          data: posts,
          maxPage: maxPage,
        });
      });
  });
});

module.exports = router;
