'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character_Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Character_Inventory.init({
    character_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    added_on: DataTypes.DATE,
    removed_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Character_Inventory',
  });
  return Character_Inventory;
};