import React from 'react';
import './Gallery.css'; // Assuming Gallery.css contains styles for .img-holder

const Img = ({ src, alt }) => (
    <div className="img-holder">
        <img
            src={src}
            alt={alt}
            loading="lazy" // Added native lazy loading for images
        />
    </div>
);

export default Img;
