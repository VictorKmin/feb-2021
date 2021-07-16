const User = require('../dataBase/User.model');

module.exports = async () => {
  const users = await User.find();

  console.log('_________________________');
  console.log(users.length);
  console.log('_________________________');
};
