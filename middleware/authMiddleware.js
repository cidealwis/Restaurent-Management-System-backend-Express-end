const jwt = require('jsonwebtoken');
const Restaurant = require('../models/Restaurant');

const authMiddleware = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Verify if the decoded ID exists in the database (optional)
      req.restaurant = await Restaurant.findById(decoded.id).select('-password');

      if (!req.restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }

      next();
    } else {
      throw new Error('Authorization header is missing or invalid');
    }
  } catch (error) {
    console.error('Authentication Error:', error.message);
    return res.status(401).json({ message: 'Not authorized, authentication failed' });
  }
};

module.exports = authMiddleware;
