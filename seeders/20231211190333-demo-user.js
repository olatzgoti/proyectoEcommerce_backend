'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        last_name: 'Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juan',
        last_name: 'Fernández',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'María',
        last_name: 'Pérez',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'Elena',
        last_name: 'Gómez',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
