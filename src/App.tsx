import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ArtistProjects from './components/ArtistProjects/ArtistProjects';
import Track from './components/Track/Track';
import Home from './pages/Home/Home';
import AlbumView from './components/AlbumView/AlbumView';
import ArtistList from './pages/ArtistList/ArtistList'; // Import the new component
import './index.css';

const App: React.FC = () => {
  const track = {
    title: '"Ready for Rap to Return to Its Roots?"',
    artist: "Kendrick Lamar -DNX-",
    imageUrl: "",
    audioUrl: "sample-audio-url.mp3",
    facts: [
      "Discover the top 10 rappers set to redefine the genre in 2024.",
      "Kendrick Lamar's latest album leads the charge with groundbreaking style."
    ]
  };

  return (
    <Router>
      <div className="content-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home track={track} />} />
          <Route path="/projects/:artistId" element={<ArtistProjects />} />
          <Route path="/track" element={<Track {...track} />} />
          <Route path="/album-view" element={<AlbumView />} />
          <Route path="/artist-list" element={<ArtistList />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;