'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        last_name: 'Smith',
        email: "john@john.es",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juan',
        last_name: 'Fernández',
        email: "juan@juan.es",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'María',
        last_name: 'Pérez',
        email: "maria@maria.es",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'Elena',
        last_name: 'Gómez',
        email: "elena@elena.es",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
