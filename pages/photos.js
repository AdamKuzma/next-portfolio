import Photo from '../components/Photo';
import React from 'react';

const Photos = () => {
    const photoData = [
        { src: '/images/photos/IMG_1618.jpg', alt: 'Queens Bridge', blurDataURL: '/images/photos/IMG_1618.jpg', },
        { src: '/images/photos/IMG_6713.jpg', alt: 'London', blurDataURL: '/images/photos/IMG_6713C.jpg', },
        { src: '/images/photos/IMG_7425.jpg', alt: 'LA', blurDataURL: '/images/photos/IMG_7425C.jpg', },
        { src: '/images/photos/IMG_8831.jpg', alt: 'Brooklyn Home', blurDataURL: '/images/photos/IMG_8831C.jpg', },
        { src: '/images/photos/IMG_2616.jpg', alt: 'Birds', blurDataURL: '/images/photos/IMG_2616C.jpg', },
        { src: '/images/photos/IMG_7263.jpg', alt: 'Flower', blurDataURL: '/images/photos/IMG_7263C.jpg', },
        { src: '/images/photos/IMG_3576.jpg', alt: 'Tudor Bridge', blurDataURL: '/images/photos/IMG_3576C.jpg', },
        { src: '/images/photos/IMG_0767.jpg', alt: 'Chicago', blurDataURL: '/images/photos/IMG_0767C.jpg', },
        { src: '/images/photos/IMG_5900.jpg', alt: 'London Tube', blurDataURL: '/images/photos/IMG_5900C.jpg', },
        { src: '/images/photos/IMG_5064.jpg', alt: 'Malta', blurDataURL: '/images/photos/IMG_5064C.jpg', },
        { src: '/images/photos/IMG_4151.jpg', alt: 'Rome Colloseum', blurDataURL: '/images/photos/IMG_4151C.jpg', },
        { src: '/images/photos/IMG_6951.jpg', alt: 'Joshua Tree', blurDataURL: '/images/photos/IMG_6951C.jpg', },
        { src: '/images/photos/IMG_0645.jpg', alt: 'Chicago Sky', blurDataURL: '/images/photos/IMG_0645CC.jpg', },
        { src: '/images/photos/IMG_3847.jpg', alt: 'London Stairs', blurDataURL: '/images/photos/IMG_3847C.jpg', },
        { src: '/images/photos/IMG_1564.jpg', alt: 'Gallery Celling', blurDataURL: '/images/photos/IMG_1564C.jpg', },
        { src: '/images/photos/IMG_4670.jpg', alt: 'Liquor Store', blurDataURL: '/images/photos/IMG_4670C.jpg', },
        { src: '/images/photos/IMG_0705.jpg', alt: 'White Flowers', blurDataURL: '/images/photos/IMG_0705C.jpg', },
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



