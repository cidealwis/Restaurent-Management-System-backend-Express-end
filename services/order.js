const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (orderData) => {
  const { restaurantId, customerId, employeeId, orderDate, orderItems } = orderData;

  const order = new Order({
    restaurantId,
    customerId,
    employeeId,
    orderDate,
    orderItems,
  });

  return await order.save();
};

// Get all orders
exports.getAllOrders = async () => {
  return await Order.find();
};

// Get an order by ID
exports.getOrderById = async (orderId) => {
  return await Order.findById(orderId);
};

// Update an order by ID
exports.updateOrder = async (orderId, orderData) => {
  return await Order.findByIdAndUpdate(orderId, orderData, { new: true, runValidators: true });
};

// Delete an order by ID
exports.deleteOrder = async (orderId) => {
  return await Order.findByIdAndDelete(orderId);
};
