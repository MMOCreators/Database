'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character_Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Character_Location.init({
    character_id: DataTypes.INTEGER,
    server_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character_Location',
  });
  return Character_Location;
};