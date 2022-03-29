'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class helpers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // helpers.hasMany(models.items, {foreignKey:'id'});
      // helpers.hasMany(models.users, {foreignKey:'id'});
    }
  }
  helpers.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'helpers',
  });
  return helpers;
};