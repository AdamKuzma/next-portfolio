import Image from 'next/image';
import { useState } from 'react';

const Photo = ({ src, alt, blurDataURL }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={`image-wrapper ${isLoaded ? 'loaded' : ''}`}>
            <Image
                src={src}
                alt={alt}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL={blurDataURL}
                onLoadingComplete={handleLoad}
                className="image"
            />
        </div>
    );
};

export default Photo;