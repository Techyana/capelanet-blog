import React from 'react';
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import styles from './Article.module.scss';

const Article2: React.FC = () => {
  return (
    <div className={`bg-gray-100 min-h-screen ${styles.article}`}>
      <Helmet>
        <title>South African Rap: The Rise of Amapiano and Hip-Hop Fusion</title>
        <meta name="description" content="Explore the rise of Amapiano and its fusion with hip-hop in South Africa." />
        <meta property="og:title" content="South African Rap: The Rise of Amapiano and Hip-Hop Fusion" />
        <meta property="og:description" content="Explore the rise of Amapiano and its fusion with hip-hop in South Africa." />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-0">
        <h1 className={`text-4xl font-bold text-white mt-16 ${styles.bgImg2} ${styles.bgLayer}`}></h1>
        <div className="p-4 bg-gray-100">
        <p className="text-lg text-gray-700 mb-4">Explore the rise of Amapiano and its fusion with hip-hop in South Africa.</p>
        <div className="flex items-center mb-4">
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1 opacity-50" />
          <FaStar className="text-yellow-500 mr-2 opacity-50" />
          <p className="text-gray-700">Rating: by Zux</p>
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
          <img src="./src/Focalistic.jpg" alt="Rapper Image" className="w-20 h-20 rounded-full mr-4" />
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