// MONGO_URI : 'HEROKU' 등 배포 플랫폼에 설정해준 변수와 같게 설정.
module.exports = {
  mongoURI: process.env.MONGO_URI,
};
