import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaShareAlt, FaCar, FaChartLine, FaComments } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import styles from './Article.module.scss';

const Article4: React.FC = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const navigate = useNavigate();

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className={`bg-gray-100 min-h-screen ${styles.article}`}>
      <Helmet>
        <title>Chinese vs European Cars in South Africa</title>
        <meta name="description" content="A comprehensive comparison of Chinese and European cars in the South African market, including market share, consumer trends, and predictions." />
        <meta property="og:title" content="Chinese vs European Cars in South Africa" />
        <meta property="og:description" content="A comprehensive comparison of Chinese and European cars in the South African market, including market share, consumer trends, and predictions." />
        <meta property="og:image" content="https://capelanet.co.za/chinese-vs-european-cars.png" />
        <meta property="og:url" content="https://capelanet.co.za/chinese-vs-european-cars" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Capelanet" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chinese vs European Cars in South Africa" />
        <meta name="twitter:description" content="A comprehensive comparison of Chinese and European cars in the South African market, including market share, consumer trends, and predictions." />
        <meta name="twitter:image" content="https://capelanet.co.za/chinese-vs-european-cars.png" />
        <meta name="twitter:site" content="@capelanet_"/>
        <meta name="twitter:creator" content="@capelanet_"/>
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-0">
        <div className={`bg-gray-100 mt-18 p-4 ${styles.bgImg4}`}>
          <h1 className={`text-4xl font-bold text-white px-2 ${styles.bgLayer}`}>Chinese vs European Cars in South Africa</h1>
        </div>
        <div className="p-4 bg-gray-100">
        <p className="text-lg text-gray-700 mb-4">A comprehensive comparison of Chinese and European cars in the South African market, including market share, consumer trends, and predictions.</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <FaCar className="text-blue-500 text-2xl cursor-pointer" title="Car Models" onClick={() => navigate('/car-models')} />
            <FaChartLine className="text-green-500 text-2xl cursor-pointer" title="Market Trends" onClick={() => navigate('/market-trends')} />
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
        <p className="text-gray-700 mb-6">Date: 19 December 2024</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Market Share Comparison</h2>
        <p className="text-gray-700 mb-6">Chinese car manufacturers have been making significant inroads into the South African market, challenging the dominance of European brands. The timeline below shows the market share of Chinese and European cars over the past decade.</p>
        <img src="images/market-share-timeline.png" alt="Market Share Timeline" className="w-full h-auto mb-6" />

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Chinese Cars in South Africa</h2>
        <p className="text-gray-700 mb-6">Chinese car brands such as Geely, Chery, and BYD have introduced a range of vehicles, including electric vehicles (EVs), that cater to different income levels and needs. These cars are known for their affordability and advanced features.</p>
        <img src="images/chinese-cars.png" alt="Chinese Cars" className="w-full h-auto mb-6" />

        <h2 className="text-2xl font-bold mb-4 text-gray-700">European Cars in South Africa</h2>
        <p className="text-gray-700 mb-6">European car brands like Volkswagen, BMW, and Mercedes-Benz continue to be popular in South Africa. These brands offer a range of vehicles, including luxury cars and EVs, known for their performance and reliability.</p>
        <img src="images/european-cars.png" alt="European Cars" className="w-full h-auto mb-6" />

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Top Entry Cars for Different Income Earners</h2>
        <p className="text-gray-700 mb-6">For low-income earners, Chinese brands offer affordable entry-level cars like the Geely GC2 and Chery QQ. For middle-income earners, options include the BYD F3 and Chery Tiggo. High-income earners can choose from luxury models like the Geely Xingyue and BYD Tang.</p>
        <img src="images/entry-level-cars.png" alt="Entry Level Cars" className="w-full h-auto mb-6" />

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Predictions for the South African Car Market</h2>
        <p className="text-gray-700 mb-6">Based on current consumer trends, it is predicted that Chinese car brands will continue to gain market share in South Africa, especially in the EV segment. However, European brands are expected to maintain their strong presence in the luxury car market.</p>
        <p className="text-gray-700 mb-6 font-bold">"Who will own the South African car market? Only time will tell, but the competition is heating up!"</p>
        </div>

        <div className="bg-blue-100 p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Exclusive Insights</h3>
          <p className="text-gray-700">Get exclusive insights into the South African car market. Subscribe to our newsletter for more!</p>
        </div>
      <Footer />
    </div>
    </div>
    );
}

export default Article4;