const OrderItem = require('../models/OrderItem');

// Create a new order item
exports.createOrderItem = async (orderItemData) => {
  const { orderId, menuItemId, quantity, price } = orderItemData;

  const orderItem = new OrderItem({
    orderId,
    menuItemId,
    quantity,
    price,
  });

  return await orderItem.save();
};

// Get all order items
exports.getAllOrderItems = async () => {
  return await OrderItem.find();
};

// Get an order item by ID
exports.getOrderItemById = async (orderItemId) => {
  return await OrderItem.findById(orderItemId);
};

// Update an order item by ID
exports.updateOrderItem = async (orderItemId, orderItemData) => {
  return await OrderItem.findByIdAndUpdate(orderItemId, orderItemData, { new: true, runValidators: true });
};

// Delete an order item by ID
exports.deleteOrderItem = async (orderItemId) => {
  return await OrderItem.findByIdAndDelete(orderItemId);
};
