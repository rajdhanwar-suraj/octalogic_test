const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CarType = require('./carType')(sequelize, DataTypes);
const BikeType = require('./bikeType')(sequelize, DataTypes);
const Vehicle = require('./vehicle')(sequelize, DataTypes);
const Booking = require('./booking')(sequelize, DataTypes);

CarType.hasMany(Vehicle, { foreignKey: 'typeId' });
BikeType.hasMany(Vehicle, { foreignKey: 'typeId' });
Vehicle.belongsTo(CarType, { foreignKey: 'typeId' });
Vehicle.belongsTo(BikeType, { foreignKey: 'typeId' });

module.exports = {
  sequelize,
  CarType,
  BikeType,
  Vehicle,
  Booking,
};
