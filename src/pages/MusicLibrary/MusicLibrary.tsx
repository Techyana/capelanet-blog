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
      <div className="w-full p-4 bg-gray-900 overflow-y-auto">
        <h1 className="text-center text-4xl mb-8 mt-16 text-white">Music Library</h1>
        <div className="flex flex-col gap-1">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex items-center bg-gray-700 px-2 py-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleArtistClick(artist.id)}
            >
              <img src={artist.image} alt={artist.name} className={`rounded-full object-cover mr-0 ${styles.artistImage}`} />
              <div className="flex flex-col">
                <h2 className="text-lg text-white mb-2">{artist.name}</h2>
                <p className="text-sm text-gray-400">Top 10 Artist: {artist.rank}</p>
                <p className="text-sm text-gray-400">Projects: {artist.projects}</p>
                <p className="text-sm text-gray-400">Active: {artist.activeYears} years</p>
              </div>
              <button className="ml-0 bg-teal-500 text-white rounded-full px-4 py-2 flex items-center transition-colors hover:bg-teal-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
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