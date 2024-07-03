const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Menu', menuSchema);
