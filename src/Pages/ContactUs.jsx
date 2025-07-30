import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { motion } from "framer-motion";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import './Contactus.css'; // Ensure your CSS file is correctly linked and contains necessary styles

const contactData = [
    {
        id: 1,
        title: "Email Us",
        text: "BuddyCostumes@gmail.com",
        link: "mailto:BuddyCostumes@gmail.com",
        icon: <GiLetterBomb aria-label="Email Icon" />,
        delay: 0.1,
    },
    {
        id: 2,
        title: "Chat with us",
        text: "+971558546883",
        link: "https://wa.me/+971558546883", // Corrected WhatsApp link format
        icon: <FaWhatsapp aria-label="Whatsapp Icon" />,
        delay: 0.2,
    },
    {
        id: 3,
        title: "Talk to us",
        text: "+971558546883",
        link: "tel:+971558546883",
        icon: <BiPhoneCall aria-label="Phone Icon" />,
        delay: 0.3,
    },
    {
        id: 4,
        title: "Message to us",
        text: "+971558546883",
        link: "sms:+971558546883",
        icon: <FaRegMessage aria-label="Message Icon" />,
        delay: 0.4,
    },
    {
        id: 5,
        title: "Email us",
        text: "BuddysCostume@gmail.com",
        link: "mailto:BuddysCostume@gmail.com",
        icon: <GiLetterBomb aria-label="Email Icon" />,
        delay: 0.1,
    },
    {
        id: 6,
        title: "Chat with us",
        text: "+971567280480",
        link: "https://wa.me/+971567280480", // Corrected WhatsApp link format
        icon: <FaWhatsapp aria-label="Whatsapp Icon" />,
        delay: 0.2,
    },
    {
        id: 7,
        title: "Talk to us",
        text: "+971567280480",
        link: "tel:+971567280480",
        icon: <BiPhoneCall aria-label="Phone Icon" />,
        delay: 0.3,
    },
    {
        id: 8,
        title: "Message to us",
        text: "+971567280480",
        link: "sms:+971567280480",
        icon: <FaRegMessage aria-label="Message Icon" />,
        delay: 0.4,
    },
];

// Animation variants for Framer Motion
const slideInFromLeft = (delay) => ({
    initial: { opacity: 0, x: 50 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.2, delay, ease: "easeInOut" },
    },
});

const ContactUs = () => {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        query: ''
    });

    // State for loading, success message, and error message
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Validation functions for mobile and email
    const validateMobile = (mobile) => /^\d{10}$/.test(mobile);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Handle input changes and update formData state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear messages when user starts typing again
        setMessage("");
        setError("");
        console.log(`Input changed: ${name} = ${value}`); // Debug log
    };

    // Handles the form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default browser form submission
        setIsLoading(true);     // Set loading state
        setMessage("");         // Clear previous messages
        setError("");           // Clear previous errors

        console.log("Submitting form with formData:", formData); // Debug log: Check formData before validation

        // Client-side validation checks using formData state
        if (!formData.name || !formData.mobile || !formData.email || !formData.query) {
            setError("All fields are required.");
            setIsLoading(false);
            console.log("Validation failed: All fields required."); // Debug log
            return;
        }

        if (!validateMobile(formData.mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            setIsLoading(false);
            console.log("Validation failed: Invalid mobile number."); // Debug log
            return;
        }

        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address.");
            setIsLoading(false);
            console.log("Validation failed: Invalid email address."); // Debug log
            return;
        }

        try {
            // Send data to your backend API using formData state
            // IMPORTANT: Ensure this URL matches your backend server's address and port
            const response = await fetch('https://buddyscostumes-backend.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Directly send formData object
            });', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Directly send formData object
            });

            const data = await response.json(); // Parse the JSON response from the backend
            console.log("Backend response:", data); // Debug log: See raw backend response

            if (!response.ok) {
                // If the server responded with an error status (e.g., 400, 500)
                throw new Error(data.message || 'Failed to submit form.');
            }

            // On successful submission
            setMessage("Your message has been sent successfully!");
            // Clear the form fields by resetting formData state
            setFormData({
                name: '',
                mobile: '',
                email: '',
                query: ''
            });
            console.log("Form submitted successfully!"); // Debug log
        } catch (error) {
            // Handle any errors during the fetch operation or from the backend response
            console.error("Error submitting form:", error);
            setError(error.message || "There was an error sending your message. Please try again.");
        } finally {
            setIsLoading(false); // Always set loading to false after request completes
        }
    };

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="container mx-auto py-20 px-10">
                {/* Main Contact Us Page Heading */}
                <h1 className="text-5xl font-bold text-center mb-10">Contact Us</h1>
                <h2 className="text-xl font-semibold text-center mb-20">
                    We are always available to answer your queries, offer advice, and discuss your Costume requirements. Get in touch with us through any of the contact details provided below.
                </h2>

                {/* Shailesh Waghela Contact Section (Cards) */}
                <h1 className="text-2xl font-semibold text-center mb-2">Contact us today to schedule a consultation</h1>
                <h1 className="text-4xl font-semibold text-center mb-5">Shailesh Waghela</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
                    {contactData.slice(0, 4).map((contact) => (
                        <motion.a
                            key={contact.id}
                            href={contact.link}
                            variants={slideInFromLeft(contact.delay)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="w-full flex flex-col items-center justify-center p-6 bg-gray-300 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-600 transform transition duration-300 hover:scale-110 hover:shadow-2xl mx-auto"
                            aria-label={contact.title}
                        >
                            <div className="text-4xl mb-4">{contact.icon}</div>
                            <h2 className="text-lg font-semibold text-center mb-2">{contact.title}</h2>
                            {contact.text && <p className="text-center text-base">{contact.text}</p>}
                        </motion.a>
                    ))}
                </div>

                {/* Meet Waghela Contact Section (Cards) */}
                <h1 className="text-4xl font-semibold text-center mb-5">Meet Waghela</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                    {contactData.slice(4).map((contact) => (
                        <motion.a
                            key={contact.id}
                            href={contact.link}
                            variants={slideInFromLeft(contact.delay)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="w-full flex flex-col items-center justify-center p-6 bg-gray-300 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-600 transform transition duration-300 hover:scale-110 hover:shadow-2xl mx-auto"
                            aria-label={contact.title}
                        >
                            <div className="text-4xl mb-4">{contact.icon}</div>
                            <h2 className="text-lg font-semibold text-center mb-2">{contact.title}</h2>
                            {contact.text && <p className="text-center text-base">{contact.text}</p>}
                        </motion.a>
                    ))}
                </div>

                {/* Form and Operational Hours Section */}
                <div className="flex flex-col md:flex-row gap-8 rounded-2xl p-2 dark:text-white dark:bg-gray-800">
                    <div className="contact-form flex flex-col items-center gap-4 text-center dark:bg-gray-800 dark:text-white text-black md:w-[calc(50%-1rem)]"> {/* Adjusted width */}
                        {/* Form Heading */}
                        <h1 className="text-3xl text-center font-semibold dark:bg-gray-800 dark:text-white">Let's discuss your Costumes needs</h1>
                        <form onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Insert your name"
                                className="dark:text-white dark:bg-gray-800"
                                required
                                aria-label="Name"
                                value={formData.name} // Controlled component: value tied to state
                                onChange={handleChange} // Update state on change
                                onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); }}
                            />
                            {/* Mobile Number Input */}
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Insert your mobile number"
                                className="dark:text-white dark:bg-gray-800"
                                required
                                aria-label="Mobile Number"
                                value={formData.mobile} // Controlled component
                                onChange={handleChange} // Update state on change
                            />
                            {/* Email Input */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Insert your email"
                                className="dark:text-white dark:bg-gray-800"
                                required
                                aria-label="Email"
                                value={formData.email} // Controlled component
                                onChange={handleChange} // Update state on change
                            />
                            {/* Query Textarea */}
                            <textarea
                                name="query"
                                placeholder="Write your Query"
                                className="dark:text-white dark:bg-gray-800"
                                required
                                aria-label="Query"
                                value={formData.query} // Controlled component
                                onChange={handleChange} // Update state on change
                            ></textarea>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="rounded-xl dark:text-white dark:bg-blue-700"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        {/* Success and Error Messages */}
                        {message && <p role="alert" className="text-center text-green-500 mt-4">{message}</p>}
                        {error && <p role="alert" className="text-center text-red-500 mt-4">{error}</p>}
                    </div>

                    {/* Operational Work Hours Section */}
                    <div className="flex flex-col items-center justify-top mt-10 md:w-[calc(50%-1rem)]"> {/* Adjusted width */}
                        <h1 className="text-3xl text-center font-semibold dark:text-white mb-10">Operational work hours</h1>
                        <div className="flex flex-col w-full space-y-2"> {/* Changed w-[85%] to w-full */}
                            <div className="px-10 flex text-center justify-between w-full Bottom-dashed pb-2"> {/* Changed w-[85%] to w-full */}
                                <h2 className="text-xl">Mon-Sun</h2>
                                <p className="text-right">: 9:00AM - 1:30PM & 4:00pm-9:30pm </p>
                            </div>
                            <div className="px-10 flex justify-between w-full Bottom-dashed pb-2"> {/* Changed w-[85%] to w-full */}
                                <h2 className="text-xl">Friday</h2>
                                <p className="text-right">: 4:00pm - 9:30PM</p>
                            </div>
                            <div className="px-10 flex justify-between w-full pb-2"> {/* Changed w-[85%] to w-full */}
                                <h2 className="text-xl">Public Holidays</h2>
                                <p className="text-right">: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Map Section */}
                <div className="mapouter">
                    <div className="map-section" style={{ marginBottom: '20px' }}>
                        <h2 className="text-4xl font-bold text-left pb-4 dark:text-white">Location to Visit</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.206339218616!2d55.27294743753715!3d25.229974275736545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42f99c99f91d%3A0x771c634afd98b57f!2sQasser%20Al%20Anaqa%20Tailoring!5e0!3m2!1sen!2sae!4v1752386050300!5m2!1sen!2sae"
                            width="100%"
                            height="450"
                            style={{ borderRadius: '8px', border: '0' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
