import React from 'react';

import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
    image: string;
    name: string;
    year: string;
    onAddToWishlist: () => void;
    onAddToCart: () => void;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, year }) => {
    return (
      <div className={styles['project-card']}>
        <img src={image} alt={name} className={styles['project-image']} />
        <div className={styles['project-info']}>
          <h3 className={styles['project-name']}>{name}</h3>
            <p className={styles['project-year']}>{year}</p>
          <div className={styles['project-actions']}>
            <button className={styles['project-button']}>play</button>
            <button className={styles['project-button']}>view</button>
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard;

