'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server_Connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Server_Connection.init({
    server_id: DataTypes.INTEGER,
    location_token: DataTypes.UUID,
    disabled_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Server_Connection',
  });
  return Server_Connection;
};