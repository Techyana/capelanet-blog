import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => {



  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/"><img src="./src/components/Header/capelanet_logo.png" alt="capelanet logo" width={120} className={styles.logoImage} /></a>
        </div>
        
      </div>
    </header>
  );
};

export default Header;