'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Airports', {
      fields: ['cityId'],
      type: 'FOREIGN KEY',
      name: 'city_fkey_constraint',
      references: { 
        table: 'Cities',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');



  }
};
