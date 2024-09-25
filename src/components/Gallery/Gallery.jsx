import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Gallery.css';
import Img from './Img';
import LargeImage from './LargeImg';

const Gallery = () => {
    const [imgLst] = useState([
        { imgSrc: 'src/components/assets/Gallery/Gallery1.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery3.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery3.webp' },
        { imgSrc: 'src/components/assets/Gallery/Gallery4.jpeg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery5.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery6.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery7.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery8.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery9.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery10.jpeg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery11.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery12.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery13.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery14.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery15.jpg' },
        { imgSrc: 'src/components/assets/Gallery/Gallery16.jpg' },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgStyle, setImgStyle] = useState({
        lrgImgConStyle: { display: 'none' },
        imgListConStyle: { display: 'flex' }
    });
    const [lrgImg, setLrgImg] = useState({
        imgSrc: '',
        title: '',
        details: ''
    });

    const navigate = useNavigate(); 

    const handleClick = (imgSrc) => {
        const index = imgLst.findIndex(image => image.imgSrc === imgSrc);

        if (index !== -1) {
            let title = '';
            let details = '';

            if (imgSrc === '') {
                title = 'Hello';
                details = 'Code is Working perfectly';
            }

            setCurrentIndex(index);
            setImgStyle({
                lrgImgConStyle: { display: 'block' },
                imgListConStyle: { display: 'none' }
            });
            setLrgImg({
                imgSrc: imgSrc,
                title: title,
                details: details
            });
        } else {
            console.error("Selected image not found.");
        }
    };

    const closeLargeImage = () => {
        setImgStyle({
            lrgImgConStyle: { display: 'none' },
            imgListConStyle: { display: 'flex' }
        });
    };

    const showPrevImage = () => {
        const prevIndex = (currentIndex - 1 + imgLst.length) % imgLst.length;
        updateLargeImage(prevIndex);
    };

    const showNextImage = () => {
        const nextIndex = (currentIndex + 1) % imgLst.length;
        updateLargeImage(nextIndex);
    };

    const updateLargeImage = (index) => {
        const selectedImage = imgLst[index];
        let title = '';
        let details = '';

        if (selectedImage.imgSrc === 'src/components/assets/JP.jpg') {
            title = 'Hello';
            details = 'Code Working perfectly';
        }

        setCurrentIndex(index);
        setLrgImg({
            imgSrc: selectedImage.imgSrc,
            title: title,
            details: details
        });
    };

    const handleBackClick = () => {
        navigate(-1); 
    };

    return (
        <React.Fragment>
            {imgStyle.imgListConStyle.display === 'flex' && (
                <div>
                    <h1 className='text-5xl font-semibold justify-center text-center py-20 mb-20 dark:text-white'>
                        Gallery
                    </h1>
                </div>
            )}
            <div className="flex-col items-center justify-center dark:text-white lg-img-con" style={imgStyle.lrgImgConStyle}>
                <LargeImage 
                    closeButton={closeLargeImage} 
                    title={lrgImg.title} 
                    details={lrgImg.details} 
                    src={lrgImg.imgSrc} 
                    showPrevImage={showPrevImage}
                    showNextImage={showNextImage}
                />
            </div>
            <div className="wrapper" style={imgStyle.imgListConStyle}>
                {imgLst.map((image, index) => (
                    <button 
                        onClick={() => handleClick(image.imgSrc)} 
                        style={{ background: 'none', border: 'none' }} 
                        key={index}
                    >
                        <Img src={image.imgSrc} />
                    </button>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Gallery;
