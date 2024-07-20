import Photo from '../components/Photo';
import React from 'react';

const Photos = () => {
    const photoData = [
        { src: '/images/photos/image1.png', alt: 'Photo 1', blurDataURL: '/images/photos/image1.png', },
        { src: '/images/photos/image2.png', alt: 'Photo 2', blurDataURL: '/images/photos/image2.png', },
        { src: '/images/photos/image1.png', alt: 'Photo 3', blurDataURL: '/images/photos/image1.png', },
        { src: '/images/photos/image2.png', alt: 'Photo 4', blurDataURL: '/images/photos/image2.png', },
        { src: '/images/photos/image1.png', alt: 'Photo 5', blurDataURL: '/images/photos/image1.png', },
        { src: '/images/photos/image2.png', alt: 'Photo 6', blurDataURL: '/images/photos/image2.png', },
    ];

    return (
        <div className="grid-container">
            {photoData.map((photo, index) => (
                <Photo key={index} {...photo} />
            ))}
        </div>
    );
};

export default Photos;



