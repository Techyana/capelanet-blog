import React from 'react';
import Track from './components/Track/Track';
import './index.css';

const App: React.FC = () => {
  const track = {
    title: "Sing About Me, I'm Dying of Thirst",
    artist: "Kendrick Lamar",
    imageUrl: "kendrick-lamar-GNX-screenshot-01-2023-billboard-1548.webp",
    audioUrl: "sample-audio-url.mp3",
    facts: [
      "The song is part of Kendrick Lamar's critically acclaimed album 'good kid, m.A.A.d city'.",
      "The song is over 12 minutes long and tells a story of Kendrick Lamar's life growing up in Compton."
    ]
  };

  return (
    <div className="App">
      <Track {...track} />
    </div>
  );
};

export default App;