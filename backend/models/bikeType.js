module.exports = (sequelize, DataTypes) => {
    const BikeType = sequelize.define('BikeType', {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return BikeType;
  };
  