const multer = require('multer');

const multerstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ex = file.mimetype.split('/')[1];
    cb(null, `user-${req.body.nom}-${Date.now()}.${ex}`);
  },
});
const multerfilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('x', false);
  }
};
var upload = multer({ storage: multerstorage, fileFilter: multerfilter });

exports.uploadphoto = upload.single('image');
