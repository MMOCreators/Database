'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Session.init({
    user_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    build_id: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    destroyed_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};