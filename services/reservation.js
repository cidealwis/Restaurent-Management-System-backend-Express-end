const Reservation = require('../models/Reservation');

// Create a new reservation
exports.createReservation = async ({ restaurantId, customerId, reservationDate, numberOfPeople }) => {
  const reservation = new Reservation({
    restaurantId,
    customerId,
    reservationDate,
    numberOfPeople,
  });

  return await reservation.save();
};

// Get all reservations
exports.getAllReservations = async () => {
  return await Reservation.find();
};

// Get a reservation by ID
exports.getReservationById = async (reservationId) => {
  return await Reservation.findById(reservationId);
};

// Update a reservation by ID
exports.updateReservation = async (reservationId, { restaurantId, customerId, reservationDate, numberOfPeople }) => {
  return await Reservation.findByIdAndUpdate(
    reservationId,
    {
      restaurantId,
      customerId,
      reservationDate,
      numberOfPeople,
    },
    { new: true }
  );
};

// Delete a reservation by ID
exports.deleteReservation = async (reservationId) => {
  return await Reservation.findByIdAndDelete(reservationId);
};
