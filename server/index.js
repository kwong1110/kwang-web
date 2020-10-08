const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.set("port", port);

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

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

app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));

app.get("/", (req, res) => {
  res.send(`Heroku deploy !! ${port}`);
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
