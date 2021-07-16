const { User } = require('../dataBase');

module.exports = {
  // EXAMPLE FOR FUTURE
  getUserByParamsInternal(id) {
    return User.findById(id).select('+password +token -email');
  },
};
