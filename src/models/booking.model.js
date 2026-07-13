const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour', required: true },
  name: { type: String, required: true },
  email: String,
  phone: String,
  qty: { type: Number, default: 1 },
  dateBooked: { type: Date, default: Date.now },
  note: String,
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
