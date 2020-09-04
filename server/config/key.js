// process.env.NODE_ENV : 환경변수를 반환 함.
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
