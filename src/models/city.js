'use strict';
const { defaultMaxListeners } = require('events');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airport, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
      })
    }

    
  }
  City.init(
    {
    name: {
    type:DataTypes.STRING,
    unique:true,
    allowNull:false,
    }
   
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};


// checking the input of model in the java script level
// Sequelize will only use Model files, it's the table representation.
// Java script