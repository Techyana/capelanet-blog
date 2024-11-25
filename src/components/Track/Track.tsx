import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Track.module.scss';
import defaultImage from './kendrick-lamar-GNX-screenshot-01-2023-billboard-1548.webp';

interface TrackProps {
  title: string;
  artist: string;
  imageUrl?: string; // Make this optional
  audioUrl: string;
  facts: string[];
}

const Track: React.FC<TrackProps> = ({ title, artist, imageUrl, audioUrl, facts }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  return (
    <div className={styles['track-card']}>
      <img src={imageUrl || defaultImage} alt={title} className={styles['track-image']} />
      <div className={styles['track-info']}>
        <h3 className={styles['track-title']}>{title}</h3>
        <p className={styles['track-artist']}>{artist}</p>
        <div className={styles['audio-controls']}>
          <button onClick={togglePlayPause} className={styles['play-pause-button']}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className={styles['seek-bar']}
            title="Seek"
          />
          <span className={styles['time']}>
            {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
          </span>
          <span className={styles['time']}>
            / {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
          </span>
        </div>
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
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
    </div>
  );
};

export default Track;