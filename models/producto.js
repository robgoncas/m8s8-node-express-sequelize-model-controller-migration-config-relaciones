'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsTo(models.Tienda, {
        foreignKey: 'idTienda',
        as: 'tienda'
      })
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    idTienda: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
    tableName: 'Productos'
  });
  return Producto;
};