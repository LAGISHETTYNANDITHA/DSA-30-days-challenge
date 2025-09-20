const express = require('express');
const BookingController = require('../controllers/bookingController');

const router = express.Router();
const bookingController = new BookingController();

// Routes for booking-related operations
router.post('/', bookingController.createBooking);
router.get('/', bookingController.getBookings);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;