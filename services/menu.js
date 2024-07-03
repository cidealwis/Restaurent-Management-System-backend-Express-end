const Menu = require('../models/Menu');

// Create a new menu
exports.createMenu = async (menuData) => {
  const { restaurantId, name, description } = menuData;

  const menu = new Menu({
    restaurantId,
    name,
    description,
  });

  return await menu.save();
};

// Get all menus
exports.getAllMenus = async () => {
  return await Menu.find();
};

// Get a menu by ID
exports.getMenuById = async (menuId) => {
  return await Menu.findById(menuId);
};

// Update a menu by ID
exports.updateMenu = async (menuId, menuData) => {
  return await Menu.findByIdAndUpdate(menuId, menuData, { new: true, runValidators: true });
};

// Delete a menu by ID
exports.deleteMenu = async (menuId) => {
  return await Menu.findByIdAndDelete(menuId);
};
