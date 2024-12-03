import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MusicLibrary.module.scss';

const artists = [
  {
    id: 1,
    name: 'Kendrick Lamar',
    image: '/src/Kendrick-Lamar-GNX.webp',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 8,
    activeYears: 17,
  },
  {
    id: 2,
    name: 'Drake',
    image: '/src/Drake.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 11,
    activeYears: 16,
  },
  {
    id: 3,
    name: 'J. Cole',
    image: '/src/JCole.png',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 6,
    activeYears: 14,
  },
  {
    id: 4,
    name: 'Travis Scott',
    image: '/src/TravisScott.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 4,
    activeYears: 8,
  },
  {
    id: 5,
    name: 'Kanye West',
    image: '/src/KanyeWest.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 10,
    activeYears: 18,
  },
  {
    id: 6,
    name: 'Jay-Z',
    image: '/src/jay-z.webp',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 13,
    activeYears: 26,
  },
  {
    id: 7,
    name: 'Eminem',
    image: '/src/eminem.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 11,
    activeYears: 24,
  },
  {
    id: 8,
    name: 'Lil Wayne',
    image: '/src/LilWayne.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 13,
    activeYears: 25,
  },
  {
    id: 9,
    name: 'Nas',
    image: '/src/Nas.webp',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 12,
    activeYears: 28,
  },
  {
    id: 10,
    name: '50 Cent',
    image: '/src/50Cent.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 5,
    activeYears: 18,
  },
];

const MusicLibrary: React.FC = () => {
    const navigate = useNavigate();
  
    const handleArtistClick = (artistId: number) => {
      navigate(`/projects/${artistId}`);
    };
  
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Music Library</h1>
        <div className={styles.artistList}>
          {artists.map((artist) => (
            <div
              key={artist.id}
              className={styles.artistCard}
              onClick={() => handleArtistClick(artist.id)}
            >
              <img src={artist.image} alt={artist.name} className={styles.artistImage} />
              <div className={styles.artistInfo}>
                <h2 className={styles.artistName}>{artist.name}</h2>
                <p className={styles.artistRank}>Top 10 Artist: {artist.rank}</p>
                <p className={styles.artistProjects}>Projects: {artist.projects}</p>
                <p className={styles.artistActive}>Active: {artist.activeYears} years</p>
              </div>
              <button className={styles.viewButton} title="View Artist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.playIcon}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>view
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MusicLibrary;