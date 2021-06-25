const db = require('../dataBase/users');

module.exports = {
  findAll: () => db,

  insertUser: (userObject) => {
    db.push(userObject);
  },

  findOneById: (userId) => db[userId]
};
