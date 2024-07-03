const menuItemService = require('../services/menuItem');

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const menuItem = await menuItemService.createMenuItem(req.body);
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await menuItemService.getAllMenuItems();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a menu item by ID
exports.getMenuItemById = async (req, res) => {
  try {
    const menuItem = await menuItemService.getMenuItemById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a menu item by ID
exports.updateMenuItem = async (req, res) => {
  try {
    const menuItem = await menuItemService.updateMenuItem(req.params.id, req.body);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a menu item by ID
exports.deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await menuItemService.deleteMenuItem(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
