'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Server.init({
    uid: DataTypes.UUID,
    name: DataTypes.STRING,
    realm_id: DataTypes.INTEGER,
    population: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    last_restart_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Server',
  });
  return Server;
};