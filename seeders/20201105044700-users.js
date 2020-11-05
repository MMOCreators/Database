'use strict';

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

const faker = require('faker');
const users = [...Array(100)].map((user) => (
  {
    username: faker.internet.userName(),
    password: faker.internet.password(16),
    email: faker.internet.email(),
    banned_on: chance.pickone([null, new Date()]),
    deleted_on: chance.pickone([null, new Date()]),
    created_on: new Date(),
    updated_at: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
