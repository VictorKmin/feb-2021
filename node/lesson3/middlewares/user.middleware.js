const userService = require('../services/user.service');
const userRolesEnum = require('../constants/user-roles.enum');

module.exports = {
  checkIsUserPresent: (req, res, next) => {
    const { userId } = req.params;

    const userById = userService.findOneById(userId);

    if (!userById) {
      throw new Error('user not found');
    }

    req.user = userById;

    next();
  },

  checkIsAdminMiddleware: (req, res, next) => {
    const { role } = req.user;

    if (role !== userRolesEnum.ADMIN) {
      throw new Error('Not admin');
    }

    next();
  }
};
