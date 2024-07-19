const { CarType, BikeType, Vehicle, sequelize } = require('../models');

async function seed() {
  await sequelize.sync({ force: true });

  const carTypes = await CarType.bulkCreate([{ type: 'Hatchback' }, { type: 'SUV' }, { type: 'Sedan' }]);
  const bikeTypes = await BikeType.create({ type: 'Cruiser' });

  await Vehicle.bulkCreate([
    { typeId: carTypes[0].id, model: 'Model 1', type: 'car' },
    { typeId: carTypes[1].id, model: 'Model 2', type: 'car' },
    { typeId: carTypes[2].id, model: 'Model 3', type: 'car' },
    { typeId: bikeTypes.id, model: 'Model 4', type: 'bike' },
  ]);

  console.log('Seeding complete');
}

seed().catch(console.error);
