// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
// IMPORTANT: Confirm this path is correct. If your Contact.js is in 'models' folder, use '../models/Contact'
const Contact = require('../query/Contact'); // <-- CORRECTED: Assuming model is in 'models' folder

// POST route for Contact Form Submission
router.post('/', async (req, res) => { // This route will be mounted at /api/contact
    // *** FIXED: Destructuring 'email' directly from req.body ***
    const { name, mobile, email, query } = req.body;

    // Log the received body for debugging on the backend console
    console.log('Backend received req.body:', req.body);

    // Basic Server-Side Validation
    if (!name || !mobile || !email || !query) { // *** FIXED: Using 'email' for validation ***
        console.log('Backend validation failed: Missing fields.'); // Debug log
        return res.status(400).json({ message: 'All form fields are required.' });
    }
    if (!/^\d{10}$/.test(mobile)) {
        console.log('Backend validation failed: Invalid mobile number.'); // Debug log
        return res.status(400).json({ message: 'Invalid mobile number format. Must be 10 digits.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // *** FIXED: Using 'email' for validation ***
        console.log('Backend validation failed: Invalid email address.'); // Debug log
        return res.status(400).json({ message: 'Invalid email address format.' });
    }

    try {
        const newContact = new Contact({
            name,
            mobile,
            email, // *** FIXED: Using 'email' directly (ES6 shorthand) ***
            query,
        });

        await newContact.save();
        console.log('Contact form data saved to DB:', newContact); // Debug log
        res.status(201).json({ message: 'Your message has been received!', data: newContact });

    } catch (error) {
        console.error('Error saving contact form submission to DB:', error); // Detailed error log
        // Mongoose validation errors can be more specific
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation failed: ' + error.message, errors: error.errors });
        }
        res.status(500).json({ message: 'There was an error processing your request. Please try again.', error: error.message });
    }
});

module.exports = router; // Export the router
