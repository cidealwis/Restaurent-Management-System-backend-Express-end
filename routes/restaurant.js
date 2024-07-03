const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant');
// Register a new restaurant
router.post('/', restaurantController.createRestaurant);

// Login a restaurant
router.post('/login', restaurantController.loginRestaurant);

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Get a restaurant by ID
router.get('/:id', restaurantController.getRestaurantById);

// Update a restaurant by ID
router.put('/:id', restaurantController.updateRestaurant);

// Delete a restaurant by ID
router.delete('/:id', restaurantController.deleteRestaurant);


module.exports = router;
