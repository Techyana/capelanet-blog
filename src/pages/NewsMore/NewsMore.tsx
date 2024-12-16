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
    image: "images/Kendrick-Lamar-GNX.webp",
  },
  {
    id: 2,
    title: "South African Rap: The Rise of Amapiano and Hip-Hop Fusion.",
    excerpt: "Explore the rise of Amapiano and its fusion with hip-hop in South Africa.",
    link: "/news-article-2",
    image: "images/amapiano.avif",
  },
  {
    id: 3,
    title: "Chris Brown's Electrifying Concert at FNB Stadium.",
    excerpt: "Highlights from Chris Brown's concert at FNB Stadium in Johannesburg, featuring LeeMcKrazy and many others in attendance.",
    link: "/news-article-3",
    image: "images/ChrisBreezy.webp",
  },
  {
    id: 4,
    title: "A New Dawn for Politics in South Africa.",
    excerpt: "Highlights from the recent political events in South Africa, including the EFF's 3rd NPA conference, MK Party's anniversary, and SACP's decision to go solo in the upcoming elections.",
    link: "/news-article-4",
    image: "images/ANC_MKP_EFF_IMG.png",
  },
  {
    id: 5,
    title: "Health Concerns and Healthy Eating for Different Age Groups.",
    excerpt: "Learn about health concerns for different age groups, how to eat healthy, suggested meals, markets, and local weather.",
    link: "/news-article-5",
    image: "images/Good_Food.jpg",
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