const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

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
app.use("/api/boards", require("./routes/boards"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
