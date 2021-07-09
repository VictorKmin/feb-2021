const { emailActionsEnum } = require('../constants');

module.exports = {
  [emailActionsEnum.WELCOME]: {
    templateName: 'welcome',
    subject: 'Welcome on board'
  },
  [emailActionsEnum.PASSWORD_CHANGED]: {
    templateName: 'changePassword',
    subject: 'Password was changed'
  }
};
