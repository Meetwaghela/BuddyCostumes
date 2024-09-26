import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Gallery.css";
import Img from "./Img";
import LargeImage from "./LargeImg";
import Gallery1 from "../../components/assets/Gallery1.jpg";
import Gallery2 from "../../components/assets/Gallery2.jpg";
import Gallery3 from "../../components/assets/Gallery3.webp";
import Gallery4 from "../../components/assets/Gallery4.jpeg";
import Gallery5 from "../../components/assets/Gallery5.jpg";
import Gallery6 from "../../components/assets/Gallery6.jpg";
import Gallery7 from "../../components/assets/Gallery7.jpg";
import Gallery8 from "../../components/assets/Gallery8.jpg";
import Gallery9 from "../../components/assets/Gallery9.jpg";
import Gallery10 from "../../components/assets/Gallery10.jpeg";
import Gallery11 from "../../components/assets/Gallery11.jpg";
import Gallery12 from "../../components/assets/Gallery12.jpg";
import Gallery13 from "../../components/assets/Gallery13.jpg";
import Gallery14 from "../../components/assets/Gallery14.jpg";
import Gallery15 from "../../components/assets/Gallery15.jpg";
import Gallery16 from "../../components/assets/Gallery16.jpg";

const Gallery = () => {
    const [imgLst] = useState([
        { imgSrc: Gallery1 },
        { imgSrc: Gallery2 },
        { imgSrc: Gallery3 },
        { imgSrc: Gallery4 },
        { imgSrc: Gallery5 },
        { imgSrc: Gallery6 },
        { imgSrc: Gallery7 },
        { imgSrc: Gallery8 },
        { imgSrc: Gallery9 },
        { imgSrc: Gallery10 },
        { imgSrc: Gallery11 },
        { imgSrc: Gallery12 },
        { imgSrc: Gallery13 },
        { imgSrc: Gallery14 },
        { imgSrc: Gallery15 },
        { imgSrc: Gallery16 }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgStyle, setImgStyle] = useState({
        lrgImgConStyle: { display: "none" },
        imgListConStyle: { display: "flex" }
    });
    const [lrgImg, setLrgImg] = useState({
        imgSrc: "",
        title: "",
        details: ""
    });

    const navigate = useNavigate(); 

    const handleClick = (imgSrc) => {
        const index = imgLst.findIndex(image => image.imgSrc === imgSrc);

        if (index !== -1) {
            let title = "";
            let details = "";

            if (imgSrc === "") {
                title = "Hello";
                details = "Code is Working perfectly";
            }

            setCurrentIndex(index);
            setImgStyle({
                lrgImgConStyle: { display: "block" },
                imgListConStyle: { display: "none" }
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
            lrgImgConStyle: { display: "none" },
            imgListConStyle: { display: "flex" }
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
        let title = "";
        let details = "";

        if (selectedImage.imgSrc === Gallery1) {
            title = "Hello";
            details = "Code Working perfectly";
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
            {imgStyle.imgListConStyle.display === "flex" && (
                <div>
                    <h1 className="text-5xl font-semibold justify-center text-center py-20 mb-20 dark:text-white">
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
                        style={{ background: "none", border: "none" }} 
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
