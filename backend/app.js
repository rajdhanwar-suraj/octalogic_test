const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

sequelize.authenticate().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
