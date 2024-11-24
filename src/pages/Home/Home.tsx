import React, { useEffect, useState } from 'react';
import MediaPlayer from '../../components/MediaPlayer/MediaPlayer';
import { fetchPlaylist } from '../../apis/YouTube/youtubeAPI';

const Home: React.FC = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getPlaylist = async () => {
      const data = await fetchPlaylist();
      setTracks(data.items.map((item: { snippet: { title: string; channelTitle: string; thumbnails: { high: { url: string } }; resourceId: { videoId: string } } }) => ({
        title: item.snippet.title,
        artist: item.snippet.channelTitle,
        imageUrl: item.snippet.thumbnails.high.url,
        audioUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        facts: ['Did you know?', 'Another interesting fact'], // Add actual facts here
      })));
    };
    getPlaylist();
  }, []);

  return (
    <div>
      {tracks.map((track, index) => (
        <MediaPlayer key={index} track={track} />
      ))}
    </div>
  );
};

export default Home;
