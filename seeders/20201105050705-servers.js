'use strict';

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

const faker = require('faker');
const servers = [...Array(100)].map((server) => (
  {
    name: chance.city(),
    realm_id: chance.integer({ min: 1, max: 6 }),
    population: chance.integer({ min: 1, max: 100 }),
    capacity: chance.integer({ min: 101, max: 1000 }),
    last_restart_on: chance.pickone([null, new Date()]),
    created_on: new Date(),
    updated_at: new Date()

  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Servers', servers, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Servers', null, {});
  }
};
