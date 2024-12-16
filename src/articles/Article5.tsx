import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaShareAlt, FaNewspaper, FaMusic, FaComments } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import styles from './Article.module.scss';

const Article5: React.FC = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const navigate = useNavigate();

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className={`bg-gray-100 min-h-screen ${styles.article}`}>
      <Helmet>
        <title>Health Concerns and Healthy Eating for Different Age Groups</title>
        <meta name="description" content="Learn about health concerns for different age groups, how to eat healthy, suggested meals, markets, and local weather." />
        <meta property="og:title" content="Health Concerns and Healthy Eating for Different Age Groups" />
        <meta property="og:description" content="Learn about health concerns for different age groups, how to eat healthy, suggested meals, markets, and local weather." />
        <meta property="og:image" content="https://capelanet.co.za/eating-healthy.png" />
        <meta property="og:url" content="https://capelanet.co.za/eating-healthy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Capelanet" />
        <meta property="og:locale" content="en_US" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Health Concerns and Healthy Eating for Different Age Groups" />
        <meta name="twitter:description" content="Learn about health concerns for different age groups, how to eat healthy, suggested meals, markets, and local weather." />
        <meta name="twitter:image" content="https://capelanet.co.za/eating-healthy.png" />
        <meta name="twitter:site" content="@capelanet_"/>
        <meta name="twitter:creator" content="@capelanet_"/>
      
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-0">
        <div className={`bg-gray-100 mt-18 p-4 ${styles.bgImg5}`}>
          <h1 className={`text-4xl font-bold text-white px-2 ${styles.bgLayer}`}>Health Concerns and Healthy Eating for Different Age Groups</h1>
        </div>
        <div className="p-4 bg-gray-100">
        <p className="text-lg text-gray-700 mb-4">Learn about health concerns for different age groups, how to eat healthy, suggested meals, markets, and local weather.</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <FaNewspaper className="text-blue-500 text-2xl cursor-pointer" title="News" onClick={() => navigate('/news-more')} />
            <FaMusic className="text-green-500 text-2xl cursor-pointer" title="Music Library" onClick={() => navigate('/music-library')} />
            <FaComments className="text-purple-500 text-2xl cursor-pointer" title="Reviews and Reactions" onClick={() => navigate('/reviews-reactions')} />
            <FaShareAlt className="text-gray-700 text-2xl cursor-pointer" title="Share" onClick={handleShareClick} />
            {showShareOptions && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2">
                <p className="text-gray-700 mb-2">Share via:</p>
                <div className="flex space-x-2">
                  <Link to="https://twitter.com/share" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    Twitter
                  </Link>
                  <Link to="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                    Facebook
                  </Link>
                  <Link to="https://www.linkedin.com/shareArticle" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    LinkedIn
                  </Link>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="mt-2 text-gray-700 underline"
                >
                  Copy Link
                </button>
              </div>
            )}
          </div>
          <div className='flex-col center-items'>
          <img src="images/OIG (32).jpg" alt="Author" className="w-10 h-10 rounded-full" title="Author Name" />
          <p className="text-gray-700 ml-3">Zux</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6">Date: 16 December 2024</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Health Concerns for Different Age Groups</h2>
        <p className="text-gray-700 mb-6">Different age groups have different health concerns. It's important to be aware of these concerns and take steps to address them. Here are some common health concerns for various age groups:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Children: Growth and development, vaccinations, nutrition.</li>
          <li>Teens: Mental health, physical activity, healthy eating.</li>
          <li>Adults: Heart health, weight management, stress management.</li>
          <li>Seniors: Bone health, chronic conditions, cognitive health.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">How to Eat Healthy</h2>
        <p className="text-gray-700 mb-6">Eating healthy is crucial for maintaining good health. Here are some tips for healthy eating:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Eat a variety of foods to ensure you get all the necessary nutrients.</li>
          <li>Include plenty of fruits and vegetables in your diet.</li>
          <li>Choose whole grains over refined grains.</li>
          <li>Limit your intake of sugar, salt, and unhealthy fats.</li>
          <li>Stay hydrated by drinking plenty of water.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Suggested Meals for Different Age Groups</h2>
        <p className="text-gray-700 mb-6">Here are some suggested meals for different age groups:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Children: Whole grain cereal with milk, fruit, and a boiled egg.</li>
          <li>Teens: Grilled chicken salad with mixed greens, tomatoes, and a vinaigrette dressing.</li>
          <li>Adults: Baked salmon with quinoa and steamed broccoli.</li>
          <li>Seniors: Vegetable soup with whole grain bread and a side of fruit.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Markets and Local Weather</h2>
        <p className="text-gray-700 mb-6">Knowing your local markets and weather can help you plan your meals and activities. Here are some tips:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Visit local farmers' markets for fresh, seasonal produce.</li>
          <li>Check the weather forecast to plan outdoor activities and meals.</li>
          <li>Stay informed about local events and markets through community newsletters and social media.</li>
        </ul>

        <div className="flex items-center mb-6">
          <img src="images/fitness_coach-1.jpeg" alt="Healthy Eating" className="w-20 h-20 rounded-full mr-4" />
          <p className="text-gray-700">Healthy eating is crucial for maintaining good health.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6 h-48">
          <iframe title="Featured Video" className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/Dzr9OUI1Yj8?si=DfQNO-i6NUOw5h-3&amp;controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>

        <div className="bg-blue-100 p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Exclusive Insights</h3>
          <p className="text-gray-700">Get exclusive insights into healthy eating and local markets. Subscribe to our newsletter for more!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article5;