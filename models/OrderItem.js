const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  menuItemId: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('OrderItem', orderItemSchema);
