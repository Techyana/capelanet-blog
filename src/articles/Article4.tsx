import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaShareAlt, FaNewspaper, FaMusic, FaComments } from 'react-icons/fa';
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
        <title>A New Dawn for Politics in South Africa</title>
        <meta name="description" content="Highlights from the recent political events in South Africa, including the EFF's 3rd NPA conference, MK Party's anniversary, and SACP's decision to go solo in the upcoming elections." />
        <meta property="og:title" content="A New Dawn for Politics in South Africa" />
        <meta property="og:description" content="Highlights from the recent political events in South Africa, including the EFF's 3rd NPA conference, MK Party's anniversary, and SACP's decision to go solo in the upcoming elections." />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-0">
        <div className={`bg-gray-100 mt-18 p-4 ${styles.bgImg4}`}>
          <h1 className={`text-4xl font-bold text-white px-2 ${styles.bgLayer}`}>A New Dawn for Politics in South Africa</h1>
        </div>
        <div className="p-4 bg-gray-100">
        <p className="text-lg text-gray-700 mb-4">Highlights from the recent political events in South Africa, including the EFF's 3rd NPA conference, MK Party's anniversary, and SACP's decision to go solo in the upcoming elections.</p>
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
          <img src="./src/OIG (32).jpg" alt="Author" className="w-10 h-10 rounded-full" title="Author Name" />
          <p className="text-gray-700 ml-3">Zux</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6">Date: 20 December 2024</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">EFF's 3rd NPA Conference</h2>
        <p className="text-gray-700 mb-6">The Economic Freedom Fighters (EFF) recently held their 3rd National People's Assembly (NPA) conference, where they announced their new top 6 leadership. The conference was a significant event, with many questioning the absence of Mbuyiseni Ndlozi.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Mmusi Maimane's Message of Support</h2>
        <p className="text-gray-700 mb-6">Mmusi Maimane, leader of the Build One South Africa (BOSA) party, gave a message of support to the newly announced top 6 of the EFF. His message was well-received and highlighted the importance of unity in South African politics.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">MK Party's 1st Year Anniversary</h2>
        <p className="text-gray-700 mb-6">The MK Party celebrated their 1st year anniversary with a grand celebration. Advocate Dali Mpofu, who recently left the EFF to join the MK Party, made a speech about his decision. Former President Jacob Zuma also addressed the crowd, adding to the significance of the event.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">SACP Goes Solo for 2026 Elections</h2>
        <p className="text-gray-700 mb-6">The South African Communist Party (SACP) has announced that they will be going solo in the upcoming local elections in 2026. This decision has raised questions about the impact on their members in the executive and whether they will take away voters from the African National Congress (ANC).</p>

        <div className="flex items-center mb-6">
          <img src="./src/EFF_President.jpeg" alt="EFF Conference" className="w-20 h-20 rounded-full mr-4" />
          <p className="text-gray-700">EFF's 3rd NPA conference in full swing.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6 h-48">
          <iframe title="Featured Video" className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/Q0Iho51GLU8?si=9n_ZMBGpCsTp5LYn" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>

        <div className="bg-blue-100 p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Exclusive Insights</h3>
          <p className="text-gray-700">Get exclusive insights into the recent political events in South Africa. Subscribe to our newsletter for more!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article4;