'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Airplanes',[{
        modelNumber:'Boeing777',
        capacity:180,
        createdAt: new Date(),
        updatedAt: new Date(),                                      
      },
       {
        modelNumber:'Vistra',
        capacity:180,
        createdAt: new Date(),
        updatedAt: new Date(),
       }
    ],{})
      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Airplanes',null,{});
  }
};
