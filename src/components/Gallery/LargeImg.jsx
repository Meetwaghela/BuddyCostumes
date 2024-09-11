import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './Gallery.css';

const LargeImg = (props) => {
    const { closeButton, src, title, details, showPrevImage, showNextImage } = props;

    const handlers = useSwipeable({
        onSwipedLeft: showNextImage,
        onSwipedRight: showPrevImage,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="lg-img-hldr" {...handlers}>
            <div className="top-bar">
                <button 
                    onClick={closeButton} 
                    className="close-icon-btn"
                >
                    <img 
                        className="close-icon" 
                        src="src/assets/x-button.png" 
                        alt="Close" 
                    />
                </button>
            </div>
            <div className="image-container">
                <button onClick={showPrevImage} className="prev-button">‹</button>
                <img src={src} alt={title} className="large-image"/>
                <button onClick={showNextImage} className="next-button">›</button>
            </div>
            <div className="bottom-bar">
                <h3 className="title">{title}</h3>
                <div className="descriptions" dangerouslySetInnerHTML={{ __html: details }} />
            </div>
        </div>
    );
}

export default LargeImg;