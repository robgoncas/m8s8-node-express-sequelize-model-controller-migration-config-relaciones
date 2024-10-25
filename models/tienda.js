'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tienda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Tienda.hasMany(models.Producto, {
      foreignKey: 'idTienda',
      as: 'productos'
     })
    }
  }
  Tienda.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    rubro: DataTypes.STRING,
    ciudad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tienda',
    tableName: 'Tiendas'
  });
  return Tienda;
};