const orderService = require('../services/order');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const order = await orderService.deleteOrder(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
