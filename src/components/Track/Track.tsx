import React from 'react';
import { motion } from 'framer-motion';
import './Track.module.scss';

interface TrackProps {
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  facts: string[];
}

const Track: React.FC<TrackProps> = ({ title, artist, imageUrl, audioUrl, facts }) => {
  return (
    <div className="track-card">
      <img src={imageUrl} alt={title} className="track-image" />
      <div className="track-info">
        <h3 className="track-title">{title}</h3>
        <p className="track-artist">{artist}</p>
        <audio controls src={audioUrl} className="track-audio" />
        <motion.div
          className="track-facts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {facts.map((fact, index) => (
            <p key={index} className="track-fact">{fact}</p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Track;