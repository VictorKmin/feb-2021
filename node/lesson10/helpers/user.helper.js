module.exports = {
  userNormalizator: (userToNormalize = {}) => {
    const fieldsToRemove = ['password'];

    fieldsToRemove.forEach((filed) => {
      delete userToNormalize[filed];
    });

    return userToNormalize;
  }
};
