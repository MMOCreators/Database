'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Login_Verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Login_Verification.init({
    user_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    totp: DataTypes.STRING,
    expires_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Login_Verification',
  });
  return Login_Verification;
};