const { responseCodesEnum } = require('../constants');
const { User } = require('../dataBase');

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.find({});

    res.json(users);
  },

  createUser: async (req, res, next) => {
    try {
      const createdUser = await User.create(req.body);

      res.status(responseCodesEnum.CREATED).json(createdUser);
    } catch (e) {
      next(e);
    }
  },

  deleteUserById: (req, res) => {
    const { user } = req;

    res.status(responseCodesEnum.NO_CONTENT).json(user);
  },

  getUserById: (req, res) => {
    const { user } = req;

    res.json(user);
  }
};
