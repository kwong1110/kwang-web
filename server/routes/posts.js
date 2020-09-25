const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.get("/:postType/:page", (req, res) => {
  // console.log(req.params.postType);
  let postType = req.params.postType;
  let page = parseInt(req.params.page, 10);
  let defaultLimit = 16;
  let limit = req.limit ? parseInt(req.body.limit, 10) : defaultLimit;
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

router.get("/:postId", (req, res) => {
  let { postId } = req.params;

  Post.findOne({ _id: postId }, (err, post) => {
    if (!post) {
      return res.json({
        success: false,
        message: "존재하지 않는 게시글 입니다.",
      });
    }
    if (err) return res.json({ suceess: false, err });
    return res.status(200).json({
      data: post,
    });
  });
});

router.post("/:postType", (req, res) => {
  req.body.type = req.params.postType;
  const post = new Post(req.body);

  post.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.put("/:postId", (req, res) => {
  let { postId } = req.params;

  Post.findOneAndUpdate({ _id: postId }, req.body, (err, post) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      data: post,
    });
  });
});

router.delete("/:postId", (req, res) => {
  let { postId } = req.params;

  Post.remove({ _id: postId }, (err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
