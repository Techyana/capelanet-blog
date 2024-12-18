import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MusicLibrary.module.scss';

const artists = [
  {
    id: 1,
    name: 'Kendrick Lamar',
    image: 'images/Kendrick-Lamar-GNX.webp',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 8,
    activeYears: 17,
  },
  {
    id: 2,
    name: 'Drake',
    image: 'images/Drake.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 11,
    activeYears: 16,
  },
  {
    id: 3,
    name: 'J. Cole',
    image: 'images/JCole.png',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 6,
    activeYears: 14,
  },
  {
    id: 4,
    name: 'Travis Scott',
    image: 'images/TravisScott.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 4,
    activeYears: 8,
  },
  {
    id: 5,
    name: 'Kanye West',
    image: 'images/KanyeWest.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 10,
    activeYears: 18,
  },
  {
    id: 6,
    name: 'Jay-Z',
    image: 'images/jay-z.webp',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 13,
    activeYears: 26,
  },
  {
    id: 7,
    name: 'Eminem',
    image: 'images/eminem.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 11,
    activeYears: 24,
  },
  {
    id: 8,
    name: 'Lil Wayne',
    image: 'images/LilWayne.jpg',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 13,
    activeYears: 25,
  },
  {
    id: 9,
    name: 'Nas',
    image: 'images/Nas.webp',
    rank: Math.floor(Math.random() * 10) + 1,
    projects: 12,
    activeYears: 28,
  },
  {
    id: 10,
    name: '50 Cent',
    image: 'images/50Cent.jpg',
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
    <div className={`w-full pt-12 bg-gray-900 overflow-y-auto ${styles.body}`}>
      <h1 className={`text-center text-xl mb-8 mt-16 ${styles.heading}`}>Music Library</h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-4 ${styles.artists}`}>
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
            <button className={styles.viewButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.playIcon}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicLibrary;