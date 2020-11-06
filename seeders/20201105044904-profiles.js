'use strict';

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

const faker = require('faker');
const users = [...Array(100)].map((user, i) => (
  {
    user_id: i+1,
    display_name: chance.name(),
    created_on: new Date(),
    updated_at: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
