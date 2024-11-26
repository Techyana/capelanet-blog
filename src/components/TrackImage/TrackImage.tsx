import React from 'react';
import styles from '../Track/Track.module.scss';

interface TrackImageProps {
  imageUrl?: string;
  defaultImage: string;
  title: string;
}

const TrackImage: React.FC<TrackImageProps> = ({ imageUrl, defaultImage, title }) => {
  return (
    <div className={styles['image-container']}>
      <img src={imageUrl || defaultImage} alt={title} className={styles['track-image']} />
      <div className={styles['smoke-effect']}></div>
    </div>
  );
};

export default TrackImage;