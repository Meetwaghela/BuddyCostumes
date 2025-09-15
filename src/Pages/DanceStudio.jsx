 import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// SVG Icons for self-contained file
const EnvelopeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
    </svg>
);
const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M380.9 97.1C339.6 57.7 283.8 32 224.2 32c-108 0-195.8 87.8-195.8 195.8c0 34.5 9 67.8 26 97.4L32 480l100.9-26.5c28.2 15.5 59.8 24.1 92.5 24.1c108 0 195.8-87.8 195.8-195.8c0-54.7-22.1-104.2-57.5-140.7L380.9 97.1zM224.2 448c-30.8 0-59.9-8.4-85.3-24.3l-5.6-3.3-58.4 15.3 15.5-56.7-3.6-5.8c-17.1-28.7-26.2-61.1-26.2-94.8c0-84.5 68.5-153 153-153s153 68.5 153 153c0 84.5-68.5 153-153 153zM345.5 321.4c-2.4-1.3-14.8-7.3-17.1-8.1-2.4-.8-4.2-1.2-6.1 1.2-1.9 2.4-7.3 11.2-8.9 13.1-1.6 2-3.2 2.2-5.9.6-2.6-1.6-11.1-4.1-21.2-13.1-7.8-7.1-12.9-15.8-14.4-18.4-1.6-2.6-.2-2.4 1.1-5.1 1.3-2.6 1.3-4.1.8-5.2-.5-1.1-6.1-14.7-8.3-20.4-2.2-5.7-4.4-4.8-6.1-4.8-1.6 0-3.5-.2-5.4-.2-1.9 0-5.1 1.2-7.8 2.5-2.6 1.3-10 9.8-10 24.1s10.3 27.9 11.7 29.8c1.4 1.9 19.3 29.6 46.7 48.3 22.3 15.3 40.2 20.3 45.4 22.3 4.1 1.6 8.1 1.1 11.3.7 3.5-.5 14.8-6.1 16.9-12.1 2.2-6.1 2.2-11.2 1.6-12.1-.5-1-1.9-1.6-4.4-2.9z"/>
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M164.9 24.6c-7.7-18.6-28.7-28.6-47.6-23.7l-88 24C12.1 30.2 0 46 0 64c0 200.7 103.5 370.3 241.9 458.5c3.1 1.9 6.3 3.4 9.6 4.9c16.6 7.9 34.3 12.3 52.4 13.5c1.1 0 2.3 .1 3.4 .1c1.2 0 2.3 0 3.5-.1c18.1-1.2 35.8-5.6 52.4-13.5c3.3-1.5 6.5-3 9.6-4.9C408.5 434.3 512 264.7 512 64c0-18-12.1-33.8-29.3-38.6l-88-24c-18.9-5-39.9 5-47.6 23.7l-44 109.9c-3.6 8.9-2.2 19 3.5 26.1l43.8 52.3c-28.7 43.1-63.5 77.9-106.6 106.6l-52.3-43.8c-7.1-5.7-17.2-7.1-26.1-3.5L164.9 24.6z"/>
    </svg>
);
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM400 128H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V128z"/>
    </svg>
);


// --- Configuration for Backend URL ---
const API_BASE_URL = 'https://buddyscostumes-backend.onrender.com/api/studio';
const DUBAI_TIMEZONE = 'Asia/Dubai';

console.log('DanceStudio component is trying to render');

// --- Helper Functions ---
const formatDate = (date) => {
    if (!date) return '';
    const dateObj = new Date(date);
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric', timeZone: DUBAI_TIMEZONE };
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

const DanceStudio = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Store as YYYY-MM-DD string
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
            const response = await fetch(`${API_BASE_URL}/available-times?date=${date}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error("Backend response for available times was not an array.");
            }

            setAvailableTimes(data);
            if (data.length === 0) {
                if (!bookingStatus.startsWith('Success') && !bookingStatus.startsWith('Error')) {
                    setBookingStatus('No available time slots for this date.');
                }
            } else {
                if (bookingStatus === 'No available time slots for this date.' || bookingStatus === 'Please select a date to view available times.') {
                    setBookingStatus('');
                }
            }
        } catch (error) {
            console.error("[Frontend] Failed to fetch times:", error.message);
            setBookingStatus(`Error: Could not load available times. Please try again or contact support.`);
            setAvailableTimes([]);
        } finally {
            setIsLoadingTimes(false);
        }
    };

    useEffect(() => {
        fetchAvailableTimes(selectedDate);
    }, [selectedDate]);

    const handleDateChange = (event) => {
        const dateString = event.target.value;
        if (dateString) {
            setSelectedDate(dateString);
            setSelectedTime('');
            setBookingStatus('');
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

        const bookingDetails = {
            date: selectedDate,
            time: selectedTime,
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
        };

        console.log('[Frontend] Submitting booking:', bookingDetails);

        try {
            const response = await fetch(`${API_BASE_URL}/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Booking failed');
            }

            const data = await response.json();
            console.log('[Frontend] Booking successful:', data);

            setBookingStatus(`Success! Studio booked for ${formatDate(selectedDate)} at ${selectedTime}.`);
            fetchAvailableTimes(selectedDate);
            setFormData({
                name: '',
                email: '',
                contact: '',
            });

        } catch (error) {
            console.error('[Frontend] Booking error:', error.message);
            setBookingStatus(`Error: ${error.message || 'Could not complete booking. Please try again.'}`);
        } finally {
            setIsBooking(false);
        }
    };

    const contactInfo = [
        { id: 1, icon: <EnvelopeIcon />, title: 'Email', text: 'studio@example.com', link: 'mailto:studio@example.com', delay: 0.3 },
        { id: 2, icon: <WhatsappIcon />, title: 'WhatsApp Inquiry', contacts: [{ text: '+971567280480', link: 'https://wa.me/971567280480' }], delay: 0.4 },
        { id: 3, icon: <PhoneIcon />, title: 'Phone Inquiry', contacts: [{ text: '+971567280480', link: 'tel:+971567280480' }], delay: 0.5 },
    ];

    return (
        <div className="container mx-auto p-4 sm:p-6 dark:bg-gray-900">
            <style>
                {`
                /* Custom styles for the date input to match the design */
                input[type="date"]::-webkit-calendar-picker-indicator {
                    color: rgba(0, 0, 0, 0);
                    opacity: 1;
                    display: block;
                    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="%234f46e5"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM400 128H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V128z"/></svg>') no-repeat;
                    background-size: 20px 20px;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                }
                .react-calendar-tailwind {
                    border: 1px solid #e2e8f0;
                    border-radius: 0.5rem;
                    width: 100%;
                }
                .react-calendar-tailwind .react-calendar__tile {
                    border-radius: 0.25rem;
                }
                .react-calendar-tailwind .react-calendar__tile--now {
                    background: #e0e7ff !important;
                }
                .react-calendar-tailwind .react-calendar__tile--active {
                    background: #4f46e5 !important;
                    color: white;
                }
                .react-calendar-tailwind .react-calendar__tile--now:hover {
                    background: #c7d2fe !important;
                }
                .react-calendar-tailwind .react-calendar__tile--active:hover {
                    background: #4338ca !important;
                }
                .dark .react-calendar-tailwind {
                    background-color: #1f2937;
                    border-color: #374151;
                    color: white;
                }
                .dark .react-calendar-tailwind .react-calendar__month-view__weekdays__weekday, .dark .react-calendar-tailwind .react-calendar__navigation button {
                    color: #d1d5db;
                }
                .dark .react-calendar-tailwind .react-calendar__tile {
                    background-color: #1f2937;
                    color: white;
                }
                .dark .react-calendar-tailwind .react-calendar__tile:enabled:hover {
                    background-color: #374151;
                }
                .dark .react-calendar-tailwind .react-calendar__tile--now {
                    background-color: #3f4e85 !important;
                }
                .dark .react-calendar-tailwind .react-calendar__tile--active {
                    background-color: #4f46e5 !important;
                    color: white;
                }
                .dark .react-calendar-tailwind .react-calendar__tile--now:hover {
                    background-color: #4338ca !important;
                }
                `}
            </style>

            <motion.div
                className="flex flex-col items-center justify-center py-10 sm:py-16 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-2xl sm:text-4xl font-bold dark:text-white"
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
                {/* Date Selection Section */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 dark:text-white">Select Date</h3>
                    <div className="w-full max-w-md">
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full p-2 border rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                {/* Time Slot Section */}
                <div className="border-t dark:border-gray-700 pt-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center dark:text-white">Select Time</h3>
                    {selectedDate && (
                        <div className="bg-indigo-600 dark:bg-indigo-800 text-white p-3 rounded-md mb-4 font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                            <CalendarIcon /> {formatDate(selectedDate)}
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
