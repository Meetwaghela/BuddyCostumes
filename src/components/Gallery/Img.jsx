import React from 'react';
import './Gallery.css';

const Img = ({ src, alt }) => (
    <div className="img-holder">
        <img src={src} alt={alt} />
    </div>
);

export default Img;