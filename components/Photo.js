import Image from 'next/image';

const Photo = ({ src, alt, blurDataURL }) => {
    return (
        <div className="image-wrapper">
            <Image
                src={src}
                alt={alt}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL={blurDataURL}
            />
        </div>
    );
};

export default Photo;