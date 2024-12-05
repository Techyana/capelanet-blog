import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned.",
    excerpt: "Discover the top rappers mentioned in Kendrick's latest album GNX.",
    link: "/news-article-1",
  },
  {
    id: 2,
    title: "What Does Hip Hop Look Like in the Upcoming Year 2025.",
    excerpt: "A deep dive into the future of Hip Hop and its evolving landscape.",
    link: "/news-article-2",
  },
  {
    id: 3,
    title: "Top 5 Movies That Influenced and Redefined the Culture.",
    excerpt: "An exploration of movies that have had a significant impact on Hip Hop culture.",
    link: "/news-article-3",
  },
  {
    id: 4,
    title: "Sample or Make Music From Scratch, beats versus production.",
    excerpt: "The ongoing debate between sampling and original production in music.",
    link: "/news-article-4",
  },
  {
    id: 5,
    title: "Podcasts and Traditional Media bias on Music.",
    excerpt: "Analyzing the bias in music coverage between podcasts and traditional media.",
    link: "/news-article-5",
  },
];

const NewsMore: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">News + More</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.excerpt}</p>
            <Link to={article.link} className="text-teal-500 hover:underline">
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsMore;