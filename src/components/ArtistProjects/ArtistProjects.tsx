import React from 'react';
import styles from './ArtistProjects.module.scss';
import imgOne from './KDOT.avif';

const ArtistProjects: React.FC = () => {
    const images = [
        'K-Dot.png',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg'
    ];

    return (
        <div className={`artist-projects ${styles['carousel-container']}`}>
            {images.map((src, index) => (
            <div key={index} className={styles['carousel-item']}>
                <img src={imgOne} alt={`Artist project ${index + 1}`} className={styles['carousel-image']} />
                <div className={styles['album-name']}>GNX</div>
                <div className={styles['album-year']}>2024</div>
            </div>
            ))}
        </div>
    );
};

export default ArtistProjects;