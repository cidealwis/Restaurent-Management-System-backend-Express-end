const Restaurant = require('../models/Restaurant');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Create a new restaurant
exports.createRestaurant = async (restaurantData) => {
  const { name, email, password, address, phoneNumber } = restaurantData;

  const restaurantExists = await Restaurant.findOne({ email });

  if (restaurantExists) {
    throw new Error('Restaurant already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const restaurant = new Restaurant({
    name,
    email,
    password: hashedPassword,
    address,
    phoneNumber,
  });

  return await restaurant.save();
};

// Login a restaurant
exports.loginRestaurant = async (email, password) => {
  const restaurant = await Restaurant.findOne({ email });

  if (restaurant && (await bcrypt.compare(password, restaurant.password))) {
    return restaurant;
  } else {
    throw new Error('Invalid email or password');
  }
};

// Get all restaurants
exports.getAllRestaurants = async () => {
  return await Restaurant.find();
};

// Get a restaurant by ID
exports.getRestaurantById = async (restaurantId) => {
  return await Restaurant.findById(restaurantId);
};

// Update a restaurant by ID
exports.updateRestaurant = async (restaurantId, restaurantData) => {
  return await Restaurant.findByIdAndUpdate(restaurantId, restaurantData, { new: true, runValidators: true });
};

// Delete a restaurant by ID
exports.deleteRestaurant = async (restaurantId) => {
  return await Restaurant.findByIdAndDelete(restaurantId);
};
