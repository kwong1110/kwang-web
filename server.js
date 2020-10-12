const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
let path = require("path");
const cors = require("cors");

const http = require("http");
const cron = require("node-cron");
let favicon = require("serve-favicon");

app.set("port", port);

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./server/config/key");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true, // 현재 URL 문자열 구문 분석기... 경고를 띄우지않음.
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((e) => console.log(e));

app.use(cors());

// 각 타입을 분석해 가져 올 수 있게 해줌.
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", require("./server/routes/users"));
app.use("/api/posts", require("./server/routes/posts"));

if (process.env.NODE_ENV === "production") {
  app.use(favicon(path.join(__dirname, "/client/build", "favicon.ico")));

  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}

// heroku sleep 방지
cron.schedule("*/20 23,0-16 * * *", function () {
  console.log("Heroku awake !!");
  http.get("https://kwangweb.herokuapp.com/");
});

app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
