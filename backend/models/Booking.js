const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    index: true // Explicitly add index for faster date queries
  },
  time: {
    type: String, // Store as "HH:MM" string
    required: true,
    enum: [ // Define ALL potential time slots, as they are the same every day
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00'
    ]
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    // match: /^\S+@\S+\.\S+$/ // Optional: add email regex validation
  },
  contact: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add a unique compound index to prevent duplicate bookings for the same date and time
bookingSchema.index({ date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model('Booking', bookingSchema);