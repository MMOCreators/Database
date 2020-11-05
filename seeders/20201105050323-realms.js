'use strict';

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

const faker = require('faker');
const realms = [...Array(5)].map((realm) => (
  {
    name: chance.country({ full: true }),
    disabled: chance.bool(),
    shutdown_on: chance.pickone([null, new Date()]),
    last_restart_on: chance.pickone([null, new Date()]),
    created_on: new Date(),
    updated_at: new Date()

  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Realms', realms, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Realms', null, {});
  }
};

