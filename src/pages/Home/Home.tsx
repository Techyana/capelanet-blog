import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.scss';
import imageOne from './Kendrick.png';
import { Link } from 'react-router-dom';

interface Track {
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  facts: string[];
}

const Home: React.FC<{ track: Track }> = ({ track }) => {
  const [factIndex, setFactIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % track.facts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [track.facts.length]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
      <img src={track.imageUrl || imageOne} alt="Sing About Me, I'm Dying of Thirst" className="absolute w-full h-full object-cover opacity-50" />
      <img
        src={track.imageUrl || imageOne}
        alt={track.title}
        className="absolute w-full h-full object-cover opacity-50"
      />
      <div className="absolute w-full h-full bg-black bg-opacity-60" />
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-2">{track.title}</h1>
        <h2 className="text-2xl mb-4">{track.artist}</h2>
        <motion.div
          className={styles['smoke-effect']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl z-10">{track.facts[factIndex]}</p>
        </motion.div>
        <Link to="/projects"
         
            className="mt-4 px-16 py-2 z-50 bg-teal-500 rounded-full hover:bg-teal-700 transition-colors duration-300"
          >
            Start
          
        </Link>
      </div>
    </div>
  );
};

export default Home;