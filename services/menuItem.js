const MenuItem = require('../models/MenuItem');

// Create a new menu item
exports.createMenuItem = async (menuItemData) => {
  const { menuId, name, description, price } = menuItemData;

  const menuItem = new MenuItem({
    menuId,
    name,
    description,
    price,
  });

  return await menuItem.save();
};

// Get all menu items
exports.getAllMenuItems = async () => {
  return await MenuItem.find();
};

// Get a menu item by ID
exports.getMenuItemById = async (menuItemId) => {
  return await MenuItem.findById(menuItemId);
};

// Update a menu item by ID
exports.updateMenuItem = async (menuItemId, menuItemData) => {
  return await MenuItem.findByIdAndUpdate(menuItemId, menuItemData, { new: true, runValidators: true });
};

// Delete a menu item by ID
exports.deleteMenuItem = async (menuItemId) => {
  return await MenuItem.findByIdAndDelete(menuItemId);
};
