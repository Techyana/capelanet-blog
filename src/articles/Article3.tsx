import React from 'react';
import { Helmet } from 'react-helmet';
import { FaStar, FaTwitter } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import styles from './Article.module.scss';

const Article3: React.FC = () => {
  return (
    <div className={`bg-gray-100 min-h-screen ${styles.article}`}>
      <Helmet>
        <title>Chris Brown's Electrifying Concert at FNB Stadium</title>
        <meta name="description" content="Highlights from Chris Brown's concert at FNB Stadium in Johannesburg, featuring LeeMcKrazy and the hit song Biri Marung." />
        <meta property="og:title" content="Chris Brown's Electrifying Concert at FNB Stadium" />
        <meta property="og:description" content="Highlights from Chris Brown's concert at FNB Stadium in Johannesburg, featuring LeeMcKrazy and the hit song Biri Marung." />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-0">
        <div className={`bg-gray-100 mt-18 p-4 ${styles.bgImg3}`}>
            <h1 className={`text-4xl font-bold text-white px-2 ${styles.bgLayer}`}>Chris Brown's Electrifying Concert at FNB Stadium</h1>
        </div>
        <div className="p-4 bg-gray-100">
        <p className="text-lg text-gray-700 mb-4">Highlights from Chris Brown's concert at FNB Stadium in Johannesburg, featuring LeeMcKrazy and many others in attendance.</p>
        <div className="flex items-center mb-4">
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-2" />
        </div>
        <p className="text-gray-700 mb-6">Date: 15 December 2024</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">A Night to Remember</h2>
        <p className="text-gray-700 mb-6">Last night, Chris Brown set the FNB Stadium in Johannesburg ablaze with an electrifying performance that left fans in awe. The concert was a perfect blend of high-energy dance routines, soulful ballads, and surprise elements that kept the audience on their feet all night long.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">LeeMcKrazy's Stellar Opening Act</h2>
        <p className="text-gray-700 mb-6">The night kicked off with a stellar opening act by Amapiano artist LeeMcKrazy. His energetic performance set the tone for the evening, and the crowd couldn't get enough of his hit tracks. LeeMcKrazy's presence on stage was magnetic, and he left a lasting impression on everyone in attendance.</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Chris Brown Dances to Biri Marung</h2>
        <p className="text-gray-700 mb-6">One of the highlights of the night was when Chris Brown danced to the biggest Amapiano song of December, "Biri Marung." The crowd went wild as the familiar beats filled the stadium, and Chris Brown's dance moves perfectly complemented the infectious rhythm of the song.</p>

        <div className="flex items-center mb-6">
          <img src="./src/ChrisB2.jpg" alt="Chris Brown Concert" className="w-20 h-20 rounded-full mr-4" />
          <p className="text-gray-700">Chris Brown performing at FNB Stadium in Johannesburg.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Major League DJs and South African Celebrities</h2>
        <p className="text-gray-700 mb-6">The concert was graced by the presence of Major League DJs and many other South African celebrities and influencers. Their attendance added to the star-studded atmosphere of the event, making it a night to remember for everyone involved.</p>

        
        <FaTwitter className="text-blue-500 text-2xl" />
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Tweets</h2>
        <div className="mb-6">
          <blockquote className="twitter-tweet bg-slate-700 p-2 mb-1 rounded-lg">
            <p lang="en" dir="ltr">Chris Brown just danced to Biri Marung at FNB Stadium and the crowd went absolutely wild! 🔥🔥 #ChrisBrownFNB #BiriMarung</p>
            &mdash; MusicLover (@MusicLover) <a href="https://twitter.com/MusicLover/status/1234567890">December 14, 2024</a>
          </blockquote>
          <blockquote className="twitter-tweet bg-slate-700 p-2 rounded-lg">
            <p lang="en" dir="ltr">LeeMcKrazy's opening act was everything! Amapiano is taking over the world! 🌍🎶 #LeeMcKrazy #Amapiano</p>
            &mdash; SA_HipHop (@SA_HipHop) <a href="https://twitter.com/SA_HipHop/status/1234567891">December 14, 2024</a>
          </blockquote>
        </div>

        </div>
        <div className="bg-blue-100 p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Exclusive Insights</h3>
          <p className="text-gray-700">Get exclusive insights into Chris Brown's concert and the rise of Amapiano. Subscribe to our newsletter for more!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article3;