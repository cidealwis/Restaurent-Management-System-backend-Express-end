const Reservation = require('../models/Reservation');
const { validationResult } = require('express-validator');

// Create a new reservation
exports.createReservation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { restaurantId, customerId, reservationDate, numberOfPeople } = req.body;

    // Example validation, you may want to add more as per your application's requirements
    if (!restaurantId || !customerId || !reservationDate || !numberOfPeople) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Create the reservation
    const reservation = new Reservation({
      restaurantId,
      customerId,
      reservationDate,
      numberOfPeople,
    });

    const savedReservation = await reservation.save();

    res.status(201).json(savedReservation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a reservation by ID
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a reservation by ID
exports.updateReservation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { restaurantId, customerId, reservationDate, numberOfPeople } = req.body;

    // Example validation, you may want to add more as per your application's requirements
    if (!restaurantId || !customerId || !reservationDate || !numberOfPeople) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      {
        restaurantId,
        customerId,
        reservationDate,
        numberOfPeople,
      },
      { new: true }
    );

    if (!updatedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a reservation by ID
exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
