import React, { useRef, useState } from 'react';
import TrackImage from '../TrackImage/TrackImage';
import TrackControls from '../TrackControls/TrackControls';
import TrackInfo from '../TrackInfo/TrackInfo';
import styles from './Track.module.scss';
import defaultImage from './KendrickLamar-01.webp';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface TrackProps {
  title: string;
  artist: string;
  imageUrl?: string; // Make this optional
  audioUrl: string;
  facts: string[];
}

const Track: React.FC<TrackProps> = ({ title, artist, imageUrl, audioUrl, facts }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'repeat' | 'repeat-one'>('off');
  const [isLoading, setIsLoading] = useState(true);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const toggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  const toggleRepeatMode = () => {
    if (repeatMode === 'off') {
      setRepeatMode('repeat');
    } else if (repeatMode === 'repeat') {
      setRepeatMode('repeat-one');
    } else {
      setRepeatMode('off');
    }
  };

  return (
    <div className={styles['track-card']}>
      {isLoading ? (
        <Skeleton height={200} />
      ) : (
        <TrackImage imageUrl={imageUrl} defaultImage={defaultImage} title={title} />
      )}
      <TrackInfo title={title} artist={artist} facts={facts} />
      <TrackControls
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        toggleShuffle={toggleShuffle}
        toggleRepeatMode={toggleRepeatMode}
        isShuffleOn={isShuffleOn}
        repeatMode={repeatMode}
      />
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className={styles['seek-bar']}
        title="Seek"
      />
      <div className={styles['time-info']}>
        <span className={styles['time']}>
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
        </span>
        <span className={styles['time']}>
          / {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
        </span>
      </div>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlayThrough={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Track;