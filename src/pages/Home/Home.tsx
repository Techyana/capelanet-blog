import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import imageOne from './Kendrick.png';
import imageTwo from './LilWayne.png';
import imageThree from './Nas.png';
import imageFour from './SnoopDogg_OG.png';
import imageFive from './Auybrey.png';

interface Track {
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  facts: string[];
}

interface Article {
  headline: string;
  link: string;
}

const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];
const articles: Article[] = [
  { headline: "Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned.", link: "/news-article-1" },
  { headline: "What Does Hip Hop Look Like in the Upcoming Year 2025.", link: "/news-article-2" },
  { headline: "Top 5 Movies That Influenced and Redefined the Culture.", link: "/news-article-3" },
  { headline: "Sample or Make Music From Scratch, beats versus production.", link: "/news-article-4" },
  { headline: "Podcasts and Traditional Media bias on Music.", link: "/news-article-5" },
];

const Home: React.FC<{ track: Track }> = ({ track }) => {
  const [factIndex, setFactIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [articleIndex, setArticleIndex] = useState(0);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % track.facts.length);
    }, 5000);

    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    const articleInterval = setInterval(() => {
      setArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000); // Change article every 3 seconds

    return () => {
      clearInterval(factInterval);
      clearInterval(imageInterval);
      clearInterval(articleInterval);
    };
  }, [track.facts.length]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
      <AnimatePresence>
        <motion.img
          key={imageIndex}
          src={images[imageIndex]}
          alt="Carousel Image"
          className="absolute w-full h-full object-cover bottom-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute w-full h-full bg-black bg-opacity-60" />
      <div className="relative z-10 text-center text-white p-4">
        <AnimatePresence>
          <motion.div
            key={articleIndex}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold mb-6">{articles[articleIndex].headline}</h1>
            <Link to={articles[articleIndex].link} className="text-white bg-teal-500 px-8 py-3 rounded-full">See Article</Link>
          </motion.div>
        </AnimatePresence>
        <h2 className="text-2xl mb-4">{track.artist}</h2>
        <motion.div
          className={styles['smoke-effect']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="absolute text-sm z-10 w-100 bottom-0 top-24">{track.facts[factIndex]}</p>
        </motion.div>
      </div>
      <div className="absolute top-20 w-full flex justify-around p-4 bg-transparent border-b-0 border-teal-500">
        <Link to="/music-library" className="flex flex-col items-center text-white pl-1 text-sm border-l-2 border-teal-500">
          <i className="fas fa-music text-2xl mb-1"></i>
          <span>Music Library</span>
        </Link>
        <Link to="/news-more" className="flex flex-col items-center text-white pl-1 text-sm border-l-2 border-teal-500">
          <i className="fas fa-newspaper text-2xl mb-1"></i>
          <span>News + More</span>
        </Link>
        <Link to="/reviews-reactions" className="flex flex-col items-center text-white pl-1 text-sm border-l-2 border-teal-500">
          <i className="fas fa-comments text-2xl mb-1"></i>
          <span>Reviews & Reactions</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;