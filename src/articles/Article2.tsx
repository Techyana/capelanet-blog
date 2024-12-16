import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaShareAlt, FaNewspaper, FaMusic, FaComments } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import styles from './Article.module.scss';

const Article2: React.FC = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const navigate = useNavigate();

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className={`bg-gray-100 min-h-screen ${styles.article}`}>
      <Helmet>
        <title>South African Rap: The Rise of Amapiano and Hip-Hop Fusion</title>
        <meta name="description" content="Explore the rise of Amapiano and its fusion with hip-hop in South Africa." />
        <meta property="og:title" content="South African Rap: The Rise of Amapiano and Hip-Hop Fusion" />
        <meta property="og:description" content="Explore the rise of Amapiano and its fusion with hip-hop in South Africa." />
        <meta property="og:image" content="https://capelanet.co.za/rsa-amapiano-rap.png" />
        <meta property="og:url" content="https://capelanet.co.za/rsa-amapiano-rap" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Capelanet" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="South African Rap: The Rise of Amapiano and Hip-Hop Fusion" />
        <meta name="twitter:description" content="Explore the rise of Amapiano and its fusion with hip-hop in South Africa." />
        <meta name="twitter:image" content="https://capelanet.co.za/rsa-amapiano-rap.png" />
        <meta name="twitter:site" content="@capelanet_"/>
        <meta name="twitter:creator" content="@capelanet_"/>
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-0">
        <div className={`bg-gray-100 mt-18 p-4 ${styles.bgImg2}`}>
          <h1 className={`text-4xl font-bold text-white px-2 ${styles.bgLayer}`}>South African Rap: The Rise of Amapiano and Hip-Hop Fusion</h1>
        </div>
        <div className="p-4 bg-gray-100">
        <p className="text-lg text-gray-700 mb-4">Explore the rise of Amapiano and its fusion with hip-hop in South Africa.</p>
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
        <p className="text-gray-700 mb-6">Date: 15 December 2024</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">The Emergence of Amapiano</h2>
        <p className="text-gray-700 mb-6">Amapiano, a genre that originated in South Africa, has taken the music world by storm. Characterized by its deep house, jazz, and lounge music elements, Amapiano has become a cultural phenomenon.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Fusion with Hip-Hop</h2>
        <p className="text-gray-700 mb-6">The fusion of Amapiano with hip-hop has created a unique sound that resonates with many. Artists like Cassper Nyovest and Focalistic have been at the forefront of this movement, blending catchy Amapiano beats with rap lyrics.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Impact on the Global Stage</h2>
        <p className="text-gray-700 mb-6">South African rap and Amapiano fusion have not only dominated local charts but have also made significant inroads internationally. The genre's infectious rhythms and danceable beats have captivated audiences worldwide.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Notable Collaborations</h2>
        <p className="text-gray-700 mb-6">Collaborations between South African artists and international stars have further propelled the genre. Tracks like "Siyathandana" by Cassper Nyovest featuring Abidoza and Boohle have garnered millions of views on YouTube.</p>

        <div className="flex items-center mb-6">
          <img src="images/Focalistic.jpg" alt="Rapper Image" className="w-20 h-20 rounded-full mr-4" />
          <p className="text-gray-700">Focalistic, a pioneer in the Amapiano and hip-hop fusion scene, continues to push boundaries with his innovative sound.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6 h-48">
          <iframe title="Featured Video" className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/q2pgxCUTRCs?si=Yi1WlS8Q3LtPBjRC&amp;controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>

        <div className="bg-blue-100 p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Exclusive Insights</h3>
          <p className="text-gray-700">Get exclusive insights into the rise of Amapiano and its fusion with hip-hop. Subscribe to our newsletter for more!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article2;