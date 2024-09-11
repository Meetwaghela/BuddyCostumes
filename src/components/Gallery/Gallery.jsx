import React, { Component } from 'react';
import './Gallery.css';
import Img from './Img';
import LargeImage from './LargeImg';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLst: [
                { imgSrc: 'src/assets/demo.jpg' },
                { imgSrc: 'src/assets/demo.jpg' },
                { imgSrc: 'src/assets/demo.jpg' },
                { imgSrc: 'src/assets/demo.jpg' },
                { imgSrc: 'src/assets/demo.jpg' },
                { imgSrc: 'src/assets/home.jpg' },
                { imgSrc: 'src/assets/demo.jpg' },
                { imgSrc: 'src/assets/demo.jpg' }
                
            ],
            currentIndex: 0,
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: ''
            }
        };
    }

    handleClick = (imgSrc) => {
        const index = this.state.imgLst.findIndex(image => image.imgSrc === imgSrc);

        if (index !== -1) {
            let title = '';
            let details = '';

            if (imgSrc === '') {
                title = 'Hello';
                details = 'Code is Working perfectly';
            }

            this.setState({
                currentIndex: index,
                imgStyle: {
                    lrgImgConStyle: { display: 'block' },
                    imgListConStyle: { display: 'none' }
                },
                lrgImg: {
                    imgSrc: imgSrc,
                    title: title,
                    details: details
                }
            });
        } else {
            console.error("Selected image not found.");
        }
    }

    closeLargeImage = () => {
        this.setState({
            imgStyle: {
                lrgImgConStyle: { display: 'none' },
                imgListConStyle: { display: 'flex' }
            }
        });
    }

    showPrevImage = () => {
        const { currentIndex, imgLst } = this.state;
        const prevIndex = (currentIndex - 1 + imgLst.length) % imgLst.length;
        this.updateLargeImage(prevIndex);
    }

    showNextImage = () => {
        const { currentIndex, imgLst } = this.state;
        const nextIndex = (currentIndex + 1) % imgLst.length;
        this.updateLargeImage(nextIndex);
    }

    updateLargeImage = (index) => {
        const selectedImage = this.state.imgLst[index];
        let title = '';
        let details = '';

        if (selectedImage.imgSrc === 'src/assets/JP.jpg') {
            title = 'Hello';
            details = 'Code Working perfectly';
        }

        this.setState({
            currentIndex: index,
            lrgImg: {
                imgSrc: selectedImage.imgSrc,
                title: title,
                details: details
            }
        });
    }

    render() {
        const { imgLst, imgStyle, lrgImg } = this.state;

        const imageItemList = imgLst.map((image, index) => (
            <button 
                onClick={() => this.handleClick(image.imgSrc)} 
                style={{ background: 'none', border: 'none' }} 
                key={index}
            >
                <Img src={image.imgSrc} />
            </button>
        ));

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
                        closeButton={this.closeLargeImage} 
                        title={lrgImg.title} 
                        details={lrgImg.details} 
                        src={lrgImg.imgSrc} 
                        showPrevImage={this.showPrevImage}
                        showNextImage={this.showNextImage}
                    />
                </div>
                <div className="wrapper" style={imgStyle.imgListConStyle}>
                    {imageItemList}
                </div>
            </React.Fragment>
        );
    }
}

export default Gallery;