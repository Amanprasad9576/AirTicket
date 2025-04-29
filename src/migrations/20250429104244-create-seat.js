'use strict';
/** @type {import('sequelize-cli').Migration} */
const { Enums } = require('../utils/common');
const { PREMIUM_ECONOMY,ECONOMY,FIRST_CLASS,BUSINESS } =Enums.SEAT_TYPE;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      col: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      type: {
        type: Sequelize.ENUM,
        values: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS],
        defaultValue: ECONOMY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};




//src/migrations/20250429104244-create-seat.js