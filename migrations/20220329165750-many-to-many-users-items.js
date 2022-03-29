'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('helpers','user_id',{
      type: Sequelize.INTEGER,
      references:{
        model:'users',
        key:'id',
      },
      onDelete:'cascade'
    })
    await queryInterface.addColumn('helpers','item_id',{
      type: Sequelize.INTEGER,
      references:{
        model:'items',
        key:'id',
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('helpers','item_id');
    await queryInterface.removeColumn('helpers','user_id');

  }
};
