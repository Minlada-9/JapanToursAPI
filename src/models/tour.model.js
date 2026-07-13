const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  seats: { type: Number, default: 0 }, // จำนวนที่นั่งว่าง
  date: Date,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model('Tour', TourSchema);
