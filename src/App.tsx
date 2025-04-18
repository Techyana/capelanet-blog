import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ArtistProjects from './components/ArtistProjects/ArtistProjects';
import Track from './components/Track/Track';
import Home from './pages/Home/Home';
import AlbumView from './components/AlbumView/AlbumView';
import MusicLibrary from './pages/MusicLibrary/MusicLibrary';
import NewsMore from './pages/NewsMore/NewsMore';
import ReviewsReactions from './pages/ReviewsReactions/ReviewsReactions';
import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';
import Article5 from './articles/Article5';
import './index.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App: React.FC = () => {
  const track = {
    title: '',
    artist: '',
    imageUrl: '',
    audioUrl: 'sample-audio-url.mp3',
    facts: [
      'Discover the top 10 rappers set to redefine the genre in 2024.',
      "Kendrick Lamar's latest album leads the charge with groundbreaking style.",
    ],
  };

  return (
    <Router>
      <div className="content-wrapper">
        <Header />
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home track={track} />} />
          <Route path="/projects/:artistId" element={<ArtistProjects />} />
          <Route path="/track" element={<Track {...track} />} />
          <Route path="/album-view" element={<AlbumView />} />
          <Route path="/music-library" element={<MusicLibrary />} />
          <Route path="/news-more" element={<NewsMore />} />
          <Route path="/reviews-reactions" element={<ReviewsReactions />} />
          <Route path="/news-article-1" element={<Article1 />} />
          <Route path="/news-article-2" element={<Article2 />} />
          <Route path="/news-article-3" element={<Article3 />} />
          <Route path="/news-article-4" element={<Article4 />} />
          <Route path="/news-article-5" element={<Article5 />} />
        </Routes>
        </ScrollToTop>
      </div>
    </Router>
  );
};

export default App;