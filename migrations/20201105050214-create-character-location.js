'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Character_Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Characters',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      server_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Servers',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      created_on: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Character_Locations');
  }
};