const { userRolesEnum } = require('../constants');
const { User } = require('../dataBase');
const userValidator = require('../validators/user/user.validator');

module.exports = {
  checkIsUserPresent: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userById = await User.findById(userId).lean();

      if (!userById) {
        throw new Error('user not found');
      }

      req.user = userById;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsAdminMiddleware: (req, res, next) => {
    try {
      const { role } = req.user;

      if (role !== userRolesEnum.ADMIN) {
        throw new Error('Not admin');
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkUserValidity: (req, res, next) => {
    try {
      const { error } = userValidator.createUser.validate(req.body);

      if (error) {
        throw new Error(error.details[0].message);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsEmailExist: async (req, res, next) => {
    try {
      const { email } = req.body;

      const userByEmail = await User.findOne({ email });

      if (userByEmail) {
        throw new Error('User with this email is already exist🤪');
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkUserRole: (rolesArr = []) => (req, res, next) => {
    try {
      if (!rolesArr || !rolesArr.length) {
        return next();
      }

      const { role } = req.user;

      if (!rolesArr.includes(role)) {
        throw new Error('Permission deed');
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  getUserByDynamicParam: (paramName, searchIn = 'body', dbKey = paramName) => async (req, res, next) => {
    try {
      const valueOfParams = req[searchIn][paramName];

      const user = await User.findOne({ [dbKey]: valueOfParams }).select('+password');

      req.user = user;
      next();
    } catch (e) {
      next(e);
    }
  }
};
