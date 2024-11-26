import React from 'react';
import { motion } from 'framer-motion';
import styles from '..Track/Track.module.scss';

interface TrackInfoProps {
  title: string;
  artist: string;
  facts: string[];
}

const TrackInfo: React.FC<TrackInfoProps> = ({ title, artist, facts }) => {
  return (
    <div className={styles['track-info']}>
      <div className={styles['marquee']}>
        <h3 className={styles['track-title']}>{title}</h3>
      </div>
      <p className={styles['track-artist']}>{artist}</p>
      <motion.div
        className={styles['track-facts']}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {facts.map((fact, index) => (
          <p key={index} className={styles['track-fact']}>{fact}</p>
        ))}
      </motion.div>
    </div>
  );
};

export default TrackInfo;