const { AUTHORIZATION } = require('../constants/constant');
const { OAuth } = require('../dataBase');
const { authHelper, passwordHasher } = require('../helpers');

module.exports = {
  login: async (req, res, next) => {
    try {
      if (!req.user) {
        throw new Error('Wrong email or password');
      }

      const { password: hashPassword, _id } = req.user;
      const { password } = req.body;

      await passwordHasher.compare(hashPassword, password);

      const tokenPair = authHelper.generateTokenPair();

      await OAuth.create({ ...tokenPair, user: _id });

      res.json({
        ...tokenPair,
        user: req.user
      });
    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      await OAuth.remove({ accessToken: token });
      res.status(204).json('Success');
    } catch (e) {
      next(e);
    }
  },

  refresh: (req, res, next) => {
    try {
      const { body } = req;

      res.json(body);
    } catch (e) {
      next(e);
    }
  }
};
