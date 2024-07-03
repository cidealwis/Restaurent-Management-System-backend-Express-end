const menuService = require('../services/menu');

// Create a new menu
exports.createMenu = async (req, res) => {
  try {
    const menu = await menuService.createMenu(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await menuService.getAllMenus();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a menu by ID
exports.getMenuById = async (req, res) => {
  try {
    const menu = await menuService.getMenuById(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a menu by ID
exports.updateMenu = async (req, res) => {
  try {
    const menu = await menuService.updateMenu(req.params.id, req.body);
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a menu by ID
exports.deleteMenu = async (req, res) => {
  try {
    const menu = await menuService.deleteMenu(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.status(200).json({ message: 'Menu deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
