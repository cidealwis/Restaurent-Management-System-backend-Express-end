const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu');

// Create a new menu
router.post('/', menuController.createMenu);

// Get all menus
router.get('/', menuController.getAllMenus);

// Get a menu by ID
router.get('/:id', menuController.getMenuById);

// Update a menu by ID
router.put('/:id', menuController.updateMenu);

// Delete a menu by ID
router.delete('/:id', menuController.deleteMenu);

module.exports = router;
