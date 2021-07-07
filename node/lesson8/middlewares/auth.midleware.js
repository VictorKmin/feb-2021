const { constants: { AUTHORIZATION } } = require('../constants');
const { OAuth } = require('../dataBase');
const ErrorHandler = require('../errors/ErrorHandler');
const { authHelper } = require('../helpers');

module.exports = {
  checkAccessToken: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      if (!token) {
        throw new ErrorHandler(401, 'No token');
      }

      await authHelper.verifyToken(token);

      const tokenObject = await OAuth.findOne({ accessToken: token });

      if (!tokenObject) {
        throw new ErrorHandler(401, 'Wrong token');
      }

      req.user = tokenObject.user;

      next();
    } catch (e) {
      next(e);
    }
  }
};
