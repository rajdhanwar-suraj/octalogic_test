const express = require('express');
const { bookVehicle } = require('../controllers/bookingController');
const router = express.Router();

router.post('/book', bookVehicle);

module.exports = router;
