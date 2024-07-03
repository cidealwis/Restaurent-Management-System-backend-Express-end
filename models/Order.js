const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  menuItemId: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new Schema({
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  orderDate: { type: Date, default: Date.now },
  orderItems: [orderItemSchema],
});

module.exports = mongoose.model('Order', orderSchema);
