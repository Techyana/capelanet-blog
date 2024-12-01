import React from 'react';
import { useLocation } from 'react-router-dom';

const AlbumView: React.FC = () => {
  const location = useLocation();
  const { name, year, image } = location.state;

  return (
    <div>
      <h1>{name}</h1>
      <p>{year}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default AlbumView;