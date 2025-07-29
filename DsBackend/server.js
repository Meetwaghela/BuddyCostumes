// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db'); // Import connectDB function
const bookingRoutes = require('./routes/bookingRoutes');

// Load environment variables from .env file
dotenv.config();hhy[67 ]

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database and synchronize models (create tables if they don't exist)
// This should happen once when the server starts
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins (for development). In production, configure specific origins.
app.use(express.json()); // Body parser for JSON data from requests

// Routes
app.use('/api/bookings', bookingRoutes);

// Simple root route for testing if backend is running
app.get('/', (req, res) => {
    res.send('Dance Studio Booking Backend API is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});