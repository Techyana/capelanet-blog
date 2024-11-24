import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './MediaPlayer.module.scss';

interface Track {
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  facts: string[];
}

const MediaPlayer: React.FC<{ track: Track }> = ({ track }) => {
  const [playing, setPlaying] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setPlaying(!playing);
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % track.facts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [track.facts.length]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
      <img src={track.imageUrl} alt={track.title} className="absolute w-full h-full object-cover opacity-50" />
      <div className="absolute w-full h-full bg-black bg-opacity-60" />
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-2">{track.title}</h1>
        <h2 className="text-2xl mb-4">{track.artist}</h2>
        <motion.div
          className="smoke-effect"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl">{track.facts[factIndex]}</p>
        </motion.div>
        <button
          onClick={togglePlay}
          className="mt-4 px-4 py-2 bg-teal-500 rounded hover:bg-teal-700 transition-colors duration-300"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
      <audio ref={audioRef} src={track.audioUrl} />
    </div>
  );
};

export default MediaPlayer;
