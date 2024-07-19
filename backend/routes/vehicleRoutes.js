const express = require('express');
const { Vehicle, CarType, BikeType } = require('../models');
const router = express.Router();

router.get('/vehicle-types', async (req, res) => {
  const carTypes = await CarType.findAll();
  const bikeTypes = await BikeType.findAll();
  res.json({ carTypes, bikeTypes });
});

router.get('/models/:typeId', async (req, res) => {
  const { typeId } = req.params;
  const vehicles = await Vehicle.findAll({ where: { typeId } });
  res.json(vehicles);
});

module.exports = router;
