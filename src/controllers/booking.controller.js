const Booking = require('../models/booking.model');
const Tour = require('../models/tour.model');

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const { tour: tourId, qty } = req.body;
    // ตรวจสอบทัวร์ว่ามีที่นั่งพอไหม (optional)
    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ error: 'Tour not found' });

    // (Simple) ถ้าคุณอยากลด seats:
    if (typeof qty === 'number' && tour.seats < qty) {
      return res.status(400).json({ error: 'Not enough seats' });
    }

    // สร้าง booking
    const booking = await Booking.create(req.body);

    // ลดจำนวน seats (optional, transactional แบบง่าย)
    if (typeof qty === 'number') {
      tour.seats = Math.max(0, tour.seats - qty);
      await tour.save();
    }

    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all bookings (with populated tour)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('tour').sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update booking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
