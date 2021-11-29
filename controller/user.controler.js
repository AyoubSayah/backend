const User = require('../model/user.model');
exports.addUser = async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    req.body.image = url + '/uploads/' + req.file.filename;

    const user = new User(req.body);
    await user.save();
    res.status(200).json({
      status: 'succes',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
    });
  }
};
