'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("admin", {
        id: {type: Sequelize.INTERGER.UNSIGNED, autoIncrement: true, primaryKey: true},
        nome: { type: Sequelize.STRING(200), allowNull: true},
        email:{ type: Sequelize.STRING(75), allowNull: true, unique: true},
        senha:{ tyoe: Sequelize.STRING(100), allowNull: true, unique: true}
    })
  },

  async down (queryInterface, Sequelize) {
    
  }
};
