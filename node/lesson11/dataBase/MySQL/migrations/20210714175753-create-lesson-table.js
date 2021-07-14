module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lesson2', {
      id: {
        type: Sequelize.DataTypes.INTEGER
      },
      title: {
        type: Sequelize.DataTypes.STRING,
      },
      date: {
        type: Sequelize.DataTypes.DATE
      },
      students_count: {
        type: Sequelize.DataTypes.INTEGER
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('lesson2');
  }
};
