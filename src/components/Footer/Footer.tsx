import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.scss';


const Footer: React.FC = () => {
  return (
    <footer className={`bg-gray-900 text-white py-8 ${styles.footer}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">capelanet</h2>
            <p className="text-gray-400 text-sm">© 2024 Capelanet. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Contact: +27 78 736 4020</p>
            <p className="text-gray-400 text-sm">Email: info@capelanet.co.za</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </Link>
            <Link to="https://wa.me/27731233330" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
