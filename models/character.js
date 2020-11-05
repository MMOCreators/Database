'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Character.init({
    user_id: DataTypes.INTEGER,
    realm_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    x: DataTypes.DOUBLE,
    y: DataTypes.DOUBLE,
    z: DataTypes.DOUBLE,
    w: DataTypes.DOUBLE,
    deleted_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};