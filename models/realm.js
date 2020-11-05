'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Realm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Realm.init({
    name: DataTypes.STRING,
    disabled: DataTypes.BOOLEAN,
    shutdown_on: DataTypes.DATE,
    last_restart_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Realm',
  });
  return Realm;
};