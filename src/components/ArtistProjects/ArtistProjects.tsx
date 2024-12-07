import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ArtistProjects.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Project {
  image: string;
  name: string;
  year: number;
}

const projects: Project[] = [
  // Your project data
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
        {firstHalf.length === 0 ? (
          <Skeleton count={4} height={200} />
        ) : (
          firstHalf.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              year={project.year}
              onAddToWishlist={() => {}}
              onAddToCart={() => {}}
            />
          ))
        )}
      </div>
      <div className={styles.column}>
        {secondHalf.length === 0 ? (
          <Skeleton count={4} height={200} />
        ) : (
          secondHalf.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              year={project.year}
              onAddToWishlist={() => {}}
              onAddToCart={() => {}}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ArtistProjects;