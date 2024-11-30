import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ArtistProjects from './components/ArtistProjects/ArtistProjects';
import Track from './components/Track/Track';
import Home from './pages/Home/Home';
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
          <Route path="/projects" element={<ArtistProjects />} />
          <Route path="/track" element={<Track {...track} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;