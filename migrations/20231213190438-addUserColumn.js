'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Users',
      'Password',
      Sequelize.STRING,
      {after: 'last_name'}
      ),

      queryInterface.addColumn(
        'Users',
        'Email',
        Sequelize.STRING,
        {after: 'Password'}
      ),

      queryInterface.addColumn(
        'Users',
        'Role',
        Sequelize.STRING,
        {after: 'Email'}
        )
  },

  async down (queryInterface, Sequelize) {
  }
};
