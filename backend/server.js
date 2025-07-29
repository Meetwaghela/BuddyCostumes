// backend/server.js

// 1. Load environment variables from .env file FIRST
require('dotenv').config();

// 2. Import necessary modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
 // Make sure this is not duplicated

// Import our routes
const studioRoutes = require('./routes/studio');
const contactRoutes = require('./routes/contactRoutes');

// 3. Initialize Express app
const app = express();

// 4. Define port and MongoDB URI using environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // This correctly pulls from .env

// --- Middleware ---
// Enable CORS for all origins (for development)
app.use(cors());
// Body parser for JSON requests
app.use(express.json());

// --- MongoDB Connection ---
// Check if MONGO_URI is defined before attempting to connect
if (!MONGO_URI) {
    console.error('Error: MONGO_URI is not defined in the .env file or environment variables.');
    console.error('Please make sure you have a .env file with MONGO_URI set (e.g., MONGO_URI=mongodb://localhost:27017/yourdb).');
    process.exit(1); // Exit the process if the URI is missing
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.message); // Log the specific error message
        process.exit(1); // Exit process if connection fails
    });

// --- API Routes ---
// Use the studio routes for any requests starting with /api/studio
app.use('/api/studio', studioRoutes);
app.use('/api/contact', contactRoutes);

// Simple root message
app.get('/', (req, res) => {
    res.send('Dance Studio Booking Backend is running!');
});

// --- Start the server ---
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});