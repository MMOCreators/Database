'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account_Verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account_Verification.init({
    user_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    jwtid: DataTypes.STRING,
    verified_on: DataTypes.DATE,
    expires_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Account_Verification',
  });
  return Account_Verification;
};