import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NewsMore.module.scss'; // Import the CSS file for additional styles

const articles = [
  {
    id: 1,
    title: "Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned.",
    excerpt: "Discover the top rappers mentioned in Kendrick's latest album GNX.",
    link: "/news-article-1",
    image: "src/Kendrick-Lamar-GNX.webp",
  },
  {
    id: 2,
    title: "What Does Hip Hop Look Like in the Upcoming Year 2025.",
    excerpt: "A deep dive into the future of Hip Hop and its evolving landscape.",
    link: "/news-article-2",
    image: "src/KungFu-Kenny.webp",
  },
  {
    id: 3,
    title: "Top 5 Movies That Influenced and Redefined the Culture.",
    excerpt: "An exploration of movies that have had a significant impact on Hip Hop culture.",
    link: "/news-article-3",
    image: "src/HipHopMovies.webp",
  },
  {
    id: 4,
    title: "Sample or Make Music From Scratch, beats versus production.",
    excerpt: "The ongoing debate between sampling and original production in music.",
    link: "/news-article-4",
    image: "src/Kanye_Studio.jpg",
  },
  {
    id: 5,
    title: "Podcasts and Traditional Media bias on Music.",
    excerpt: "Analyzing the bias in music coverage between podcasts and traditional media.",
    link: "/news-article-5",
    image: "src/HipHopMedia.png",
  },
];

const NewsMore: React.FC = () => {
  return (
    <div className="container mx-auto p-0 mb-8">
      <h1 className="text-2xl font-bold mt-20 text-center">News + More</h1>
      <h2 className="mt-8 pb-2 pl-4">Latest News:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className="relative bg-cover bg-center p-6 shadow-lg article-tile"
            style={{ backgroundImage: `url(${article.image})` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent backdrop-filter backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-white">{article.title}</h2>
              <p className="text-white mb-4">{article.excerpt}</p>
              <Link to={article.link} className="text-teal-500 hover:underline">
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsMore;