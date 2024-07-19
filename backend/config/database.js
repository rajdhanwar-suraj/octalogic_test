const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('octalogic', 'root', 'Su2211raj', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
