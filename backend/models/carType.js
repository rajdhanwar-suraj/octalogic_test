module.exports = (sequelize, DataTypes) => {
    const CarType = sequelize.define('CarType', {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return CarType;
  };
  