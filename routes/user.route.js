module.exports = (app) => {
  const multer = require('../utilities/multer');
  const controler = require('../controller/user.controler');
  app.post('/api/v1/user', multer.uploadphoto, controler.addUser);
};
