const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  postalCode: String,
});

const customerSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  addresses: [addressSchema],
});

module.exports = mongoose.model('Customer', customerSchema);
