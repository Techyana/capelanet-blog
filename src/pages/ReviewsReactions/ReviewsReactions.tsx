import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    title: "Review of Kendrick Lamar's Latest Album",
    excerpt: "An in-depth review of Kendrick Lamar's groundbreaking new album.",
    link: "/review-1",
  },
  {
    id: 2,
    title: "The Evolution of Hip Hop: A Review",
    excerpt: "Exploring the evolution of Hip Hop through the lens of recent releases.",
    link: "/review-2",
  },
  // Add more reviews as needed
];

const reactions = [
  {
    id: 1,
    title: "Reaction to Kendrick Lamar's New Single",
    videoUrl: "https://www.youtube.com/embed/your-video-id-1",
  },
  {
    id: 2,
    title: "First Listen: New Hip Hop Releases",
    videoUrl: "https://www.youtube.com/embed/your-video-id-2",
  },
  // Add more reactions as needed
];

const ReviewsReactions: React.FC = () => {
  return (
    <div className="container mx-auto p-6 mt-16">
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Reactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reactions.map((reaction) => (
            <motion.div
              key={reaction.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold mb-4">{reaction.title}</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={reaction.videoUrl}
                  title={reaction.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold mb-4">{review.title}</h3>
              <p className="text-gray-700 mb-4">{review.excerpt}</p>
              <a href={review.link} className="text-teal-500 hover:underline">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewsReactions;