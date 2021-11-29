const mongoose = require('mongoose');

const Usershcema = mongoose.Schema({
  firstname: String,
  email: String,
  lastname: String,
  password: String,
  image: String,
  isAdmin: Boolean,
  //sont case
});
module.exports = mongoose.model('user', Usershcema);
