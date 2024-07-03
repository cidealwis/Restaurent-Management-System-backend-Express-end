const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  reservationDate: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true },
  reservationStatus: {
    type: String,
    default: 'Pending', 
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
