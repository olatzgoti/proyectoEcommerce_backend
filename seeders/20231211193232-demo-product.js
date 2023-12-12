'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Pantalones',
        price: 40,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Camisa',
        price: 30,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'Teclado',
        price: 20,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'Zapatos',
        price: 50,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Balón de fútbol',
        price: 20,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
