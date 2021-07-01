const userRolesEnum = require('../constants/user-roles.enum');
const { User } = require('../dataBase');
const userValidator = require('../validators/user/user.validator');

module.exports = {
  checkIsUserPresent: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userById = await User.findById(userId);

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
  }
};
