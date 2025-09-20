const Booking = require('../models/booking');

class BookingController {
  async createBooking(req, res) {
    try {
      const booking = new Booking(req.body);
      await booking.save();
      res.status(201).json({ message: "Booking created!", booking });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getBookings(req, res) {
    try {
      const bookings = await Booking.find();
      res.status(200).json({ bookings });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBooking(req, res) {
    try {
      const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!booking) return res.status(404).json({ message: "Booking not found" });
      res.status(200).json({ message: "Booking updated!", booking });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteBooking(req, res) {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) return res.status(404).json({ message: "Booking not found" });
      res.status(200).json({ message: "Booking deleted!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new BookingController();
