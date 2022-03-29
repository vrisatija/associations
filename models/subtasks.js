'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subtasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subtasks.belongsTo(models.items);

    }
  }
  subtasks.init({
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'subtasks',
  });
  return subtasks;
};