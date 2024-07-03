const orderItemService = require('../services/orderItem');

// Create a new order item
exports.createOrderItem = async (req, res) => {
  try {
    const orderItem = await orderItemService.createOrderItem(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all order items
exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await orderItemService.getAllOrderItems();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an order item by ID
exports.getOrderItemById = async (req, res) => {
  try {
    const orderItem = await orderItemService.getOrderItemById(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ message: 'Order item not found' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an order item by ID
exports.updateOrderItem = async (req, res) => {
  try {
    const orderItem = await orderItemService.updateOrderItem(req.params.id, req.body);
    if (!orderItem) {
      return res.status(404).json({ message: 'Order item not found' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order item by ID
exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await orderItemService.deleteOrderItem(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ message: 'Order item not found' });
    }
    res.status(200).json({ message: 'Order item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
