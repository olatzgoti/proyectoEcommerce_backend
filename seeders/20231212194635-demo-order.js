'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
    {
      UserId: 1,
      ProductId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 2,
      ProductId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      UserId: 3,
      ProductId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      UserId: 5,
      ProductId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
