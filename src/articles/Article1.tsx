import React from 'react';
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';
import styles from './Article.module.scss';

const Article1: React.FC = () => {
  return (
    <div className={`p-4 bg-gray-100 min-h-screen ${styles.article}`}>
      <Helmet>
        <title>Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned</title>
        <meta name="description" content="Discover the top rappers mentioned in Kendrick's latest album GNX." />
        <meta property="og:title" content="Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned" />
        <meta property="og:description" content="Discover the top rappers mentioned in Kendrick's latest album GNX." />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-700 mt-16">Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned</h1>
        <img src="/path-to-image.jpg" alt="Kendrick's GNX" className="w-full h-auto rounded-lg mb-6" />
        <p className="text-lg text-gray-700 mb-4">Discover the top rappers mentioned in Kendrick's latest album GNX.</p>
        <div className="flex items-center mb-4">
          <FaStar className="text-yellow-500 mr-2" />
          <p className="text-gray-700">Author: John Doe</p>
        </div>
        <p className="text-gray-700 mb-6">Date: January 1, 2025</p>

        <h2 className="text-2xl font-bold mb-4">Notable Mentions</h2>
        <p className="text-gray-700 mb-6">Kendrick's GNX album has mentioned several notable rappers, showcasing their impact on the hip-hop scene.</p>

        <h2 className="text-2xl font-bold mb-4">Lupe Fiasco: A Subtle Shot?</h2>
        <p className="text-gray-700 mb-6">
          One of the more subtle shots Kendrick might have thrown was at Lupe Fiasco. Kendrick's track "Wrecked Murals" has a title that seems to poke at Lupe's song "Murals." While there are no direct bars aimed at Lupe, the title itself has fans speculating about the potential diss.
        </p>

        <h2 className="text-2xl font-bold mb-4">Lil Wayne: A Missed Acknowledgment</h2>
        <p className="text-gray-700 mb-6">
          Lil Wayne's omission stands out in Kendrick's narrative. Kendrick expressed his disappointment that Lil Wayne did not congratulate him on being named the artist to perform at the Superbowl in Lil Wayne's hometown of Louisiana next month. This silence from a legendary figure in hip-hop evidently struck a chord with Kendrick.
        </p>

        <h2 className="text-2xl font-bold mb-4">Nas: The Lone Congratulator</h2>
        <p className="text-gray-700 mb-6">
          In contrast, Kendrick appreciated Nas for being the only rapper to personally call and congratulate him. This gesture highlights Nas's respect and camaraderie, further cementing his status as a mentor and pillar in the hip-hop community.
        </p>

        <h2 className="text-2xl font-bold mb-4">Disappointment with Snoop Dogg</h2>
        <p className="text-gray-700 mb-6">
          Kendrick also expressed his disappointment with Snoop Dogg. Earlier in the year, during Kendrick's beef with Drake, Snoop appeared to entertain an AI freestyle called "Taylor Made," featuring AI versions of 2Pac and Snoop, used by Drake to taunt Kendrick. Snoop's Instagram post acknowledging Kendrick, with the excuse of it being "the edibles," did not sit well with Kendrick.
        </p>

        <h2 className="text-2xl font-bold mb-4">A Nod to TDE</h2>
        <p className="text-gray-700 mb-6">
          Despite these tensions, Kendrick also took the time to mention his peers from TDE (Top Dawg Entertainment) such as AB-Soul, Jay Rock, and Schoolboy Q. In the song "The Heart Part 6," he acknowledges their journey together and their contributions to his success.
        </p>

        <div className="flex items-center mb-6">
          <img src="/path-to-rappers-image.jpg" alt="Rapper Image" className="w-20 h-20 rounded-full mr-4" />
          <p className="text-gray-700">One of the standout rappers mentioned is J. Cole, whose lyrical prowess continues to inspire many.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6 h-48">
          <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/fuV4yQWdn_4?si=-IhRlg81A2afsJ5P" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Exclusive Insights</h3>
          <p className="text-gray-700">Get exclusive insights into the creation of GNX and the inspiration behind each track. Subscribe to our newsletter for more!</p>
        </div>
      </div>
    </div>
  );
};

export default Article1;
