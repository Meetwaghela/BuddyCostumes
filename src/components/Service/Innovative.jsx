// src/pages/AlterationAndRepairPage.js
import React, { useState, useRef, useEffect } from 'react';

// Import your costume-themed video files directly
import alt1 from '../../components/assets/alt1.mp4';
import alt2 from '../../components/assets/alt2.mp4';
import alt3 from '../../components/assets/alt3.mp4';

const Innovative = () => {
    // useState for managing active video/playback
    const [playingIndex, setPlayingIndex] = useState(null); // null means no video is currently playing
    const videoRefs = useRef([]); // A ref to hold all video elements

    // Set the desired playback speed (e.g., 0.75 for slightly slower)
    const playbackSpeed = 0.75;

    // Use useEffect to apply playback speed to all videos once they are rendered
    useEffect(() => {
        videoRefs.current.forEach(video => {
            if (video) {
                video.playbackRate = playbackSpeed;
            }
        });
    }, [playbackSpeed]); // Re-run if playbackSpeed changes (though it's a constant here)

    const handleVideoClick = (index) => {
        const videoElement = videoRefs.current[index];

        if (videoElement) {
            // Pause any currently playing video first
            if (playingIndex !== null && videoRefs.current[playingIndex] && videoRefs.current[playingIndex] !== videoElement) {
                videoRefs.current[playingIndex].pause();
                videoRefs.current[playingIndex].currentTime = 0; // Optional: reset to start
            }

            if (playingIndex === index) { // If clicking the same video, pause it
                videoElement.pause();
                setPlayingIndex(null);
            } else { // Play the clicked video
                videoElement.play();
                setPlayingIndex(index);
            }
        }
    };

    const videoGalleryItems = [
        {
            src: alt1,
            alt: 'Costume Zip Fixing Process',
        },
        {
            src: alt2,
            alt: 'Costume Repair Demonstration',
        },
        {
            src: alt3,
            alt: 'Vest Alteration Process',
        },
    ];

    return (
        <div className="container mx-auto p-5 font-inter">
            {/* Hero section */}
            <header className="text-center mt-20 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg">
                <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">Expert Costume Alteration & Repair</h1>
                <p className="text-xl opacity-90 animate-fade-in-up">
                    Bringing your beloved costumes back to life with precision, care, and a perfect fit.
                </p>
            </header>

            {/* Comprehensive Solutions Section */}
            <section className="my-16">
                <h2 className="text-4xl font-bold text-center text-green-700 mb-12 animate-fade-in">Our Comprehensive Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                        <h3 className="text-3xl font-semibold text-blue-700 mb-4">Expertise & Trust</h3>
                        <p className="text-gray-700 leading-relaxed">
                            At Buddys Costume, we understand the sentimental and practical value of your costumes.
                            Our skilled artisans are dedicated to restoring your cherished outfits to their former glory.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                        <h3 className="text-3xl font-semibold text-blue-700 mb-4">Meticulous Process</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Every alteration and repair undergoes a thorough assessment, detailed consultation, and careful material sourcing
                            to ensure a seamless and durable restoration.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                        <h3 className="text-3xl font-semibold text-blue-700 mb-4">Quality & Durability</h3>
                        <p className="text-gray-700 leading-relaxed">
                            From minor tears to complete overhauls, we ensure every fix meets our high standards,
                            extending the life and beauty of your treasured pieces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Video Gallery Section - Play on Click, Larger Size, Slower Playback */}
            <section className="my-16">
                <h2 className="text-4xl font-bold text-center text-green-700 mb-12 animate-fade-in">Our Services in Action (Videos)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8 justify-items-center">
                    {videoGalleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center justify-center p-4 rounded-lg shadow-xl bg-white transition-all duration-300 ease-in-out hover:shadow-2xl cursor-pointer ${playingIndex === index ? 'ring-4 ring-blue-500' : ''}`}
                            onClick={() => handleVideoClick(index)} // Handle click for play/pause
                        >
                            <video
                                ref={el => videoRefs.current[index] = el} // Assign ref dynamically
                                src={item.src}
                                alt={item.alt}
                                controls
                                loop={playingIndex === index} // Loop only when playing
                                muted={playingIndex !== index} // Mute when not playing, unmute when playing
                                // Changed aspect ratio to 3:4 (width:height) to make it taller
                                // You can try aspect-[2/3] for even taller, or adjust the numbers like aspect-[9/16] for classic portrait video
                                className="w-full object-cover rounded-md aspect-[3/4] max-w-sm"
                                // Removed autoPlay here as it's now controlled by state
                                onEnded={() => setPlayingIndex(null)} // Reset state when video ends
                            >
                                Your browser does not support the video tag.
                            </video>
                            {/* Optional: Add a play overlay when not playing */}
                            {playingIndex !== index && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md">
                                    <svg className="h-20 w-20 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.156A1 1 0 008 8v4a1 1 0 001.555.844l3.5-2a1 1 0 000-1.688l-3.5-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Call to Action */}
            <footer className="text-center mt-20 p-8 bg-blue-700 text-white rounded-xl shadow-lg">
                <p className="text-2xl font-semibold mb-4">
                    Ready to extend the life and beauty of your costumes?
                </p>
                <p className="text-lg">
                    <a href="/ContactUs" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                        Contact us today
                    </a>
                    {' '}and let us help you keep your treasured pieces in impeccable condition.
                </p>
            </footer>
        </div>
    );
};

export default Innovative;