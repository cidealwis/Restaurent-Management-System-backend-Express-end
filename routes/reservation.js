const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation');

// Create a new reservation
router.post('/', reservationController.createReservation);

// Get all reservations
router.get('/', reservationController.getAllReservations);

// Get a reservation by ID
router.get('/:id', reservationController.getReservationById);

// Update a reservation by ID
router.put('/:id', reservationController.updateReservation);

// Delete a reservation by ID
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
