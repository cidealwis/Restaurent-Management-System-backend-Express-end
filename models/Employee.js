const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  position: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
