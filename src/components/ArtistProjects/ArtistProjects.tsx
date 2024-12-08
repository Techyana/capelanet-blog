import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ArtistProjects.module.scss';

const projects = [
    {
      id: 1,
      image: '/src/KDot-OD.jpg',
      name: 'Overly Dedicated',
      year: '2010',
    },
    {
      id: 2,
      image: '/src/KDot-Section80.jpg',
      name: 'Section.80',
      year: '2011',
    },
    {
      id: 3,
      image: '/src/K-Dot.png',
      name: 'Good Kid, M.A.A.D City',
      year: '2012',
    },
    {
      id: 4,
      image: '/src/KDot-TPAB.avif',
      name: 'To Pimp A Butterfly',
      year: '2014',
    },
    {
      id: 5,
      image: '/src/Untitled-unmastered_KDot.jpg',
      name: 'Untitled Unmastered',
      year: '2016',
    },
    {
      id: 6,
      image: '/src/Damn_KDot.jpg',
      name: 'DAMN.',
      year: '2017',
    },
    {
      id: 7,
      image: '/src/Kendrick-Lamar-Mr-Morale-and-the-Big-Steppers.webp',
      name: 'Mr. Morale & The Big Steppers',
      year: '2020',
    },
    {
      id: 8,
      image: '/src/Kendrick-Lamar-GNX.webp',
      name: 'GNX',
      year: '2024',
    }
];

const ArtistProjects: React.FC = () => {
    const firstHalf = projects.slice(0, 4);
    const secondHalf = projects.slice(4);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Kendrick Lamar Catalogue
            </h1>
            <div className={styles.column}>
                {firstHalf.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        name={project.name}
                        year={project.year}
                        onAddToWishlist={() => {}}
                        onAddToCart={() => {}}
                    />
                ))}
            </div>
            <div className={styles.column}>
                {secondHalf.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        name={project.name}
                        year={project.year}
                        onAddToWishlist={() => {}}
                        onAddToCart={() => {}}
                    />
                ))}
            </div>
        </div>
    );
}

export default ArtistProjects;