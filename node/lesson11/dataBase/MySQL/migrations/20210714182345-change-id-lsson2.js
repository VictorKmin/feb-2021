module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('lesson2', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('lesson2', 'id', {
      type: Sequelize.DataTypes.STRING,
      primaryKey: false,
      autoIncrement: false
    });
  }
};
