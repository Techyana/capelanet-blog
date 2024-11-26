import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/"><img src="./src/components/Header/capelanet_logo.png" alt="capelanet logo" width={180} className={styles.logoImage} /></a>
        </div>
        <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="/about" className={styles.navLink}>About</a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact" className={styles.navLink}>Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.menuIcon} onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;