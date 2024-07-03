const restaurantService = require('../services/restaurant');
const generateToken = require('../utils/generateToken');

// Register a new restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurant(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login a restaurant
exports.loginRestaurant = async (req, res) => {
  const { email, password } = req.body;

  try {
    const restaurant = await restaurantService.loginRestaurant(email, password);

    if (restaurant) {
      const token = generateToken(restaurant._id);
      res.json({
        _id: restaurant._id,
        name: restaurant.name,
        email: restaurant.email,
        token,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};



// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantService.getAllRestaurants();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await restaurantService.getRestaurantById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a restaurant by ID
exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a restaurant by ID
exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.deleteRestaurant(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
