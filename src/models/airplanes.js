'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplanes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'
      });
    }
  }   
  
  Airplanes.init({
    modelNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:'',
    },
    capacity:{
     type:DataTypes.INTEGER,
     allowNull:false,
     defaultValue:0
    }
  },    
    {
     sequelize,
     modelName: 'Airplane',
  });
  return Airplanes;
};


// Java script level constaint meaning the input on
// datatype check on javascript not by database