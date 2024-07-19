module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Booking;
  };
  