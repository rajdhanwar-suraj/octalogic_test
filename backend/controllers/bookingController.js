const { Op } = require('sequelize');
const { Vehicle, Booking } = require('../models');

exports.bookVehicle = async (req, res) => {
  const { vehicleId, userName, startDate, endDate } = req.body;

  const existingBooking = await Booking.findOne({
    where: {
      vehicleId,
      [Op.or]: [
        {
          startDate: {
            [Op.between]: [startDate, endDate],
          },
        },
        {
          endDate: {
            [Op.between]: [startDate, endDate],
          },
        },
      ],
    },
  });

  if (existingBooking) {
    return res.status(400).json({ message: 'Vehicle already booked for the selected dates' });
  }

  const booking = await Booking.create({ vehicleId, userName, startDate, endDate });
  res.status(201).json(booking);
};
