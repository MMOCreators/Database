'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Build extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Build.init({
    uid: DataTypes.UUID,
    client_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Build',
  });
  return Build;
};