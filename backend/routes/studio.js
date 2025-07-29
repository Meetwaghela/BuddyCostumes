const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Import our Booking model - CONFIRM THIS PATH IS CORRECT
const moment = require('moment-timezone'); // Import moment-timezone

// Define all available time slots - these are the SAME for all days of the week
const ALL_AVAILABLE_TIMES = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

// Define the target timezone for current time checks (Dubai)
const DUBAI_TIMEZONE = 'Asia/Dubai';

// @route   GET /api/studio/available-times
// @desc    Get available time slots for a specific date (using query param)
// @access  Public
router.get('/available-times', async (req, res) => {
    const dateString = req.query.date; // Access from req.query (e.g., "2025-08-01")
    console.log(`[GET /available-times] Backend received request for date: ${dateString}`);

    if (!dateString) {
        return res.status(400).json({ message: 'Date query parameter is required (YYYY-MM-DD).' });
    }

    // Parse the incoming date string as a moment object in Dubai timezone
    const targetDateInDubai = moment.tz(dateString, 'YYYY-MM-DD', DUBAI_TIMEZONE);

    // Basic date validation
    if (!targetDateInDubai.isValid()) {
        console.warn(`[GET /available-times] Invalid date format received: ${dateString}`);
        return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
    }

    // Define the start and end of the target day in UTC for database query
    // This ensures consistency regardless of server's local timezone for DB storage
    const startOfTargetDayUTC = targetDateInDubai.clone().startOf('day').utc().toDate();
    const endOfTargetDayUTC = targetDateInDubai.clone().endOf('day').utc().toDate(); // Use endOf('day') for inclusive range

    console.log(`[GET /available-times] Querying DB for bookings between (UTC): ${startOfTargetDayUTC.toISOString()} and ${endOfTargetDayUTC.toISOString()}`);
    console.log(`[GET /available-times] Target Date in Dubai (start of day): ${targetDateInDubai.clone().startOf('day').format()}`); // Debug log
    console.log(`[GET /available-times] Target Date in Dubai (end of day): ${targetDateInDubai.clone().endOf('day').format()}`); // Debug log


    try {
        const bookedSlots = await Booking.find({
            date: {
                $gte: startOfTargetDayUTC,
                $lte: endOfTargetDayUTC // Use $lte with endOf('day') for correct range
            }
        }).select('time date'); // Also select 'date' to confirm what's returned from DB for debugging

        const bookedTimes = bookedSlots.map(booking => booking.time);
        console.log(`[GET /available-times] Booked slots fetched from DB for ${dateString}:`, bookedSlots); // Debug log: raw booked slots
        console.log(`[GET /available-times] Booked times (mapped) for ${dateString}:`, bookedTimes);

        // Get the current date and time in the specified timezone (Dubai)
        const currentDateTimeInDubai = moment().tz(DUBAI_TIMEZONE);
        const todayStringInDubai = currentDateTimeInDubai.format('YYYY-MM-DD');

        // Determine if the requested date is 'today' in Dubai timezone
        const isTargetDateTodayInDubai = (dateString === todayStringInDubai);
        console.log(`[GET /available-times] Current date in Dubai: ${todayStringInDubai}, Requested date: ${dateString}, Is requested date today in Dubai? ${isTargetDateTodayInDubai}`);

        const availableTimes = ALL_AVAILABLE_TIMES.map(time => {
            let isPast = false;

            // Only apply 'isPast' logic if the requested date is the current date in Dubai
            if (isTargetDateTodayInDubai) {
                // Construct a moment object for the specific slot time on the current date in Dubai timezone
                const slotDateTimeInDubai = moment.tz(`${dateString} ${time}`, 'YYYY-MM-DD HH:mm', DUBAI_TIMEZONE);

                // Check if the slot time has already passed the current time in Dubai
                isPast = slotDateTimeInDubai.isBefore(currentDateTimeInDubai);

                console.log(`[GET /available-times] - Slot ${time} on ${dateString}: currentDateTimeInDubai=${currentDateTimeInDubai.format()}, slotDateTimeInDubai=${slotDateTimeInDubai.format()}, isPast=${isPast}`);
            }

            return {
                time: time,
                // A slot is marked as booked if its time string is in bookedTimes array OR if it's a past time on the current date
                isBooked: bookedTimes.includes(time) || isPast,
            };
        });

        console.log(`[GET /available-times] Final available times sent for ${dateString}:`, JSON.stringify(availableTimes, null, 2));

        res.json(availableTimes);
    } catch (err) {
        console.error(`[GET /available-times] Error fetching available times for ${dateString}:`, err.message);
        res.status(500).json({ message: 'Server error: Could not fetch available times.' });
    }
});

// @route   POST /api/studio/book
// @desc    Book a dance studio slot
// @access  Public
router.post('/book', async (req, res) => {
    const { date, time, name, email, contact } = req.body;
    console.log(`[POST /book] Received booking request for date: ${date}, time: ${time}`);

    // Basic validation
    if (!date || !time || !name || !email || !contact) {
        console.warn('[POST /book] Missing required fields for booking.');
        return res.status(400).json({ message: 'Please provide date, time, name, email, and contact.' });
    }

    // Validate that the requested time is one of the ALL_AVAILABLE_TIMES
    if (!ALL_AVAILABLE_TIMES.includes(time)) {
        console.warn(`[POST /book] Invalid time slot provided: ${time}`);
        return res.status(400).json({ message: 'Invalid time slot provided.' });
    }

    // Parse the booking date string as a moment object in Dubai timezone
    const bookingDateInDubai = moment.tz(date, 'YYYY-MM-DD', DUBAI_TIMEZONE);

    if (!bookingDateInDubai.isValid()) {
        console.warn(`[POST /book] Invalid date format for booking: ${date}`);
        return res.status(400).json({ message: 'Invalid date format.' });
    }

    // Convert the booking date to UTC start of day for consistent storage
    const bookingDateUTC = bookingDateInDubai.clone().startOf('day').utc().toDate();
    console.log(`[POST /book] Booking date (raw string): ${date}, Booking date (parsed in Dubai): ${bookingDateInDubai.format()}, Booking date (UTC for DB): ${bookingDateUTC.toISOString()}`);


    try {
        // Check if the slot is already booked in the database
        const existingBooking = await Booking.findOne({ date: bookingDateUTC, time: time });
        if (existingBooking) {
            console.warn(`[POST /book] Attempt to book already taken slot: ${date} ${time}`);
            return res.status(409).json({ message: 'This time slot is already booked for the selected date.' });
        }

        // Prevent booking past times for the current day in Dubai timezone
        const currentDateTimeInDubai = moment().tz(DUBAI_TIMEZONE);
        // Check if the booking date is the same calendar day as today in Dubai timezone
        const isTodayInDubai = bookingDateInDubai.format('YYYY-MM-DD') === currentDateTimeInDubai.format('YYYY-MM-DD');

        const selectedSlotDateTimeInDubai = moment.tz(`${date} ${time}`, 'YYYY-MM-DD HH:mm', DUBAI_TIMEZONE);

        if (isTodayInDubai && selectedSlotDateTimeInDubai.isBefore(currentDateTimeInDubai)) {
            console.warn(`[POST /book] Attempt to book past time slot: ${date} ${time}`);
            return res.status(400).json({ message: 'Cannot book a time slot in the past.' });
        }

        // Create a new booking
        const newBooking = new Booking({
            date: bookingDateUTC, // Store date as UTC start of day
            time,
            name,
            email,
            contact,
            // Mongoose's timestamps option (if enabled in schema) will add createdAt/updatedAt automatically
            // If not, you can add createdAt: new Date() here.
        });

        await newBooking.save();
        console.log('[POST /book] Booking successful:', newBooking);
        res.status(201).json({ message: 'Booking successful!', booking: newBooking });

    } catch (err) {
        console.error(`[POST /book] Error booking studio for ${date} ${time}:`, err.message);
        if (err.code === 11000) { // Duplicate key error from unique index
            return res.status(409).json({ message: 'This time slot is already booked.' });
        }
        res.status(500).json({ message: 'Server error: Could not complete booking.' });
    }
});

module.exports = router;
