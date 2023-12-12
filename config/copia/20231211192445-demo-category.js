'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Ropa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Informática',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'Calzado',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'Deportes',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
