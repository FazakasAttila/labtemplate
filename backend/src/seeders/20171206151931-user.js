'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'John',
      password: 'Doe',
      street_adress: 'demo@demo.com',
      city: 'orad'
    },{
      username: 'John2',
      password: 'Doe2',
      street_adress: 'demo@demo.com2',
      city: 'orad2'
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
