const express = require("express");
const router = express.Router();
const { Board } = require("../models/Board");
const { auth } = require("../middleware/auth");

router.post("/getBoardList", (req, res) => {});

module.exports = router;
