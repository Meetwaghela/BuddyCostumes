import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaSms, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import axios from 'axios';
import './DanceStudio.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'; // Ensure moment is imported
import 'moment-timezone'; // Ensure moment-timezone is imported

// --- Configuration for Backend URL ---
const API_BASE_URL = 'http://localhost:5000/api/studio';
const DUBAI_TIMEZONE = 'Asia/Dubai'; // Define timezone consistently

console.log('DanceStudio component is trying to render');

// --- Helper Functions ---
const formatDate = (date) => {
    if (!date) return '';
    // Use moment-timezone to format the date in Dubai's local time
    return moment(date).tz(DUBAI_TIMEZONE).format('ddd, MMMM D, YYYY');
};

// --- Main Component ---
const DanceStudio = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Stores a Date object
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
    });
    const [isLoadingTimes, setIsLoadingTimes] = useState(false);
    const [isBooking, setIsBooking] = useState(false);
    const [bookingStatus, setBookingStatus] = useState('');

    const fetchAvailableTimes = async (date) => {
        if (!date) {
            console.log("No date provided to fetchAvailableTimes, skipping fetch.");
            setAvailableTimes([]);
            return;
        }

        setIsLoadingTimes(true);
        try {
            // Format date string for the backend consistently in YYYY-MM-DD
            const dateStringForBackend = moment(date).tz(DUBAI_TIMEZONE).format('YYYY-MM-DD');
            console.log(`[Frontend] Fetching times for date: ${dateStringForBackend}`);

            const response = await axios.get(`${API_BASE_URL}/available-times`, {
                params: { date: dateStringForBackend }
            });

            if (!Array.isArray(response.data)) {
                throw new Error("Backend response for available times was not an array.");
            }

            setAvailableTimes(response.data);
            if (response.data.length === 0) {
                if (!bookingStatus.startsWith('Success') && !bookingStatus.startsWith('Error')) {
                    setBookingStatus('No available time slots for this date.');
                }
            } else {
                if (bookingStatus === 'No available time slots for this date.' || bookingStatus === 'Please select a date to view available times.') {
                    setBookingStatus('');
                }
            }
        } catch (error) {
            console.error("[Frontend] Failed to fetch times:", error.response?.data?.message || error.message);
            setBookingStatus(`Error: Could not load available times. Please try again or contact support.`);
            setAvailableTimes([]);
        } finally {
            setIsLoadingTimes(false);
        }
    };

    useEffect(() => {
        // Fetch times when selectedDate changes
        fetchAvailableTimes(selectedDate);
    }, [selectedDate]); // Dependency array includes selectedDate

    const handleDateChange = (date) => {
        if (date instanceof Date && !isNaN(date.getTime())) {
            console.log(`[Frontend] Calendar date changed to: ${date.toISOString().split('T')[0]}`);
            setSelectedDate(date); // Store the Date object
            setSelectedTime(''); // Clear selected time when date changes
            setBookingStatus(''); // Clear status message
        } else {
            console.error("[Frontend] Invalid date received from calendar:", date);
        }
    };

    const handleTimeSelect = (timeSlot) => {
        if (timeSlot.isBooked) {
            setBookingStatus('This time slot is already booked or in the past.');
            return;
        }
        setSelectedTime(timeSlot.time);
        setBookingStatus('');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setBookingStatus('');
        setIsBooking(true);

        if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.contact) {
            setBookingStatus('Error: Please fill in all fields and select an available date/time.');
            setIsBooking(false);
            return;
        }

        // Generate the date string for the backend consistently
        const dateStringForBackend = moment(selectedDate).tz(DUBAI_TIMEZONE).format('YYYY-MM-DD');

        const bookingDetails = {
            date: dateStringForBackend, // FIXED: Use consistently formatted date string
            time: selectedTime,
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
        };

        console.log('[Frontend] Submitting booking:', bookingDetails);

        try {
            const response = await axios.post(`${API_BASE_URL}/book`, bookingDetails);
            console.log('[Frontend] Booking successful:', response.data);

            setBookingStatus(`Success! Studio booked for ${formatDate(selectedDate)} at ${selectedTime}.`);

            // IMPORTANT: Re-fetch available times for the selected date after successful booking
            // This will update the UI to show the newly booked slot as crossed out
            fetchAvailableTimes(selectedDate);

            // Optionally clear form data after successful booking
            setFormData({
                name: '',
                email: '',
                contact: '',
            });

        } catch (error) {
            console.error('[Frontend] Booking error:', error.response?.data?.message || error.message);
            setBookingStatus(`Error: ${error.response?.data?.message || 'Could not complete booking. Please try again.'}`);
        } finally {
            setIsBooking(false);
        }
    };

    const contactInfo = [
        { id: 1, icon: <FaEnvelope />, title: 'Email', text: 'studio@example.com', link: 'mailto:studio@example.com', delay: 0.3 },
        { id: 2, icon: <FaWhatsapp />, title: 'WhatsApp Inquiry', contacts: [{ text: '+971567280480', link: 'https://wa.me/971567280480' }], delay: 0.4 },
        { id: 3, icon: <FaPhoneAlt />, title: 'Phone Inquiry', contacts: [{ text: '+971567280480', link: 'tel:+971567280480' }], delay: 0.5 },
    ];

    return (
        <div className="container mx-auto p-4 sm:p-6 dark:bg-gray-900">

            <motion.div
                className="flex flex-col items-center justify-center py-10 sm:py-16 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-3xl sm:text-4xl font-bold dark:text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Book Our Dance Studio
                </motion.h1>
            </motion.div>

            <motion.p
                className="text-md sm:text-lg text-center mb-8 sm:mb-12 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Select a date and time below to book our dance studio space. Fill in your details to complete the reservation. We look forward to hosting you!
            </motion.p>

            <motion.div
                className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Calendar Section */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 dark:text-white">Select Date</h3>
                    <div className="calendar-container w-full max-w-md">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            minDate={new Date()} // Prevent booking past dates
                            className="react-calendar-tailwind"
                        />
                    </div>
                </div>

                {/* Time Slot Section */}
                <div className="border-t dark:border-gray-700 pt-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center dark:text-white">Select Time</h3>
                    {selectedDate && (
                        <div className="bg-indigo-600 dark:bg-indigo-800 text-white p-3 rounded-md mb-4 font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                            <FaCalendarAlt /> {formatDate(selectedDate)}
                        </div>
                    )}
                    {isLoadingTimes ? (
                        <p className="text-center dark:text-gray-400">Loading available times...</p>
                    ) : availableTimes.length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
                            {availableTimes.map((slot) => (
                                <button
                                    key={slot.time}
                                    className={`
                                        border rounded-md p-2 sm:p-3 cursor-pointer text-center transition duration-150 ease-in-out
                                        text-sm sm:text-base font-medium min-h-[50px] flex items-center justify-center
                                        ${selectedTime === slot.time
                                            ? 'bg-indigo-600 dark:bg-indigo-700 text-white border-indigo-700 dark:border-indigo-600 ring-2 ring-indigo-500 dark:ring-indigo-400'
                                            : slot.isBooked
                                                ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-gray-400 dark:border-gray-500 cursor-not-allowed line-through italic'
                                                : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white'
                                        }
                                    `}
                                    onClick={() => handleTimeSelect(slot)}
                                    disabled={slot.isBooked}
                                >
                                    {slot.time}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center dark:text-gray-400">No available time slots for this date.</p>
                    )}
                </div>

                {/* Booking Form Section - Conditionally Rendered */}
                {selectedDate && selectedTime && (
                    <motion.div
                        className="border-t dark:border-gray-700 pt-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center dark:text-white">Enter Your Details</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Contact Number:</label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded transition duration-150 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
                                disabled={isBooking || !selectedTime}
                            >
                                {isBooking ? 'Booking...' : 'Book Now'}
                            </button>
                        </form>
                    </motion.div>
                )}

                {/* Booking Status Message */}
                {bookingStatus && (
                    <div className={`
                        mt-4 p-3 rounded text-center border
                        ${bookingStatus.startsWith('Error')
                            ? 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200'
                            : 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200'
                        }
                    `}>
                        {bookingStatus}
                    </div>
                )}
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
                className="mt-12 sm:mt-16 pt-8 border-t dark:border-gray-700 max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 dark:text-white">Contact Us for Inquiries</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {contactInfo.map((info) => (
                        <motion.div
                            key={info.id}
                            className="p-4 border dark:border-gray-700 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <span className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 mr-4">{info.icon}</span>
                            <div className="text-sm sm:text-base">
                                <h4 className="text-md sm:text-lg font-semibold dark:text-white">{info.title}</h4>
                                {info.contacts ? (
                                    info.contacts.map((contact, index) => (
                                        <a key={index} href={contact.link} className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300" aria-label={`Contact through ${info.title} at ${contact.text}`}>
                                            {contact.text}
                                        </a>
                                    ))
                                ) : (
                                    <a href={info.link} className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300" aria-label={`Contact through ${info.title} at ${info.text}`}>
                                        {info.text}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default DanceStudio;
