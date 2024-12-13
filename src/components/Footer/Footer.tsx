import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss'; // Ensure you create a corresponding CSS module for styling

const Footer: React.FC = () => {
  return (
    <footer className={`bg-gray-800 text-white py-6 ${styles.footer}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Music App</h2>
            <p className="text-sm">© 2023 Music App. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/music-library" className="hover:underline">Music Library</Link>
            <Link to="/news-more" className="hover:underline">News + More</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;