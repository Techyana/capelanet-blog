import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Article.module.scss";

const Article2: React.FC = () => {
  return (
    <div className={styles.article}>
      <Helmet>
        <title>Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned</title>
        <meta
          name="description"
          content="Discover the top rappers mentioned in Kendrick's latest album GNX."
        />
        <meta
          property="og:title"
          content="Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned"
        />
        <meta
          property="og:description"
          content="Discover the top rappers mentioned in Kendrick's latest album GNX."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>
      <h1>Kendrick's GNX: Spotlight on Some Notable Rappers Mentioned</h1>
      <p>Discover the top rappers mentioned in Kendrick's latest album GNX.</p>
      <img src="/path-to-image.jpg" alt="Kendrick's GNX" />
      <p>Article content goes here...</p>
      <p>Author: John Doe</p>
      <p>Date: January 1, 2025</p>
    </div>
  );
};

export default Article2;