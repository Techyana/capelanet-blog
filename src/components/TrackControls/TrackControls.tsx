import React from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaRandom, FaRedo } from 'react-icons/fa';
import styles from '..Track/Track.module.scss';

interface TrackControlsProps {
  isPlaying: boolean;
  togglePlayPause: () => void;
  toggleShuffle: () => void;
  toggleRepeatMode: () => void;
  isShuffleOn: boolean;
  repeatMode: 'off' | 'repeat' | 'repeat-one';
}

const TrackControls: React.FC<TrackControlsProps> = ({
  isPlaying,
  togglePlayPause,
  toggleShuffle,
  toggleRepeatMode,
  isShuffleOn,
  repeatMode
}) => {
  return (
    <div className={styles['audio-controls']}>
      <button className={styles['control-button']} onClick={toggleShuffle} title="Shuffle">
        <FaRandom color={isShuffleOn ? '#4edbacc7' : '#718096'} />
      </button>
      <button className={styles['control-button']} title="Previous Track" onClick={() => { /* handle previous track */ }}>
        <FaStepBackward />
      </button>
      <button className={styles['control-button']} onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className={styles['control-button']} title="Next Track" onClick={() => { /* handle next track */ }}>
        <FaStepForward />
      </button>
      <button className={styles['control-button']} onClick={toggleRepeatMode} title="Repeat">
        {repeatMode === 'off' && <FaRedo />}
        {repeatMode === 'repeat' && <FaRedo color="#4edbacc7" />}
        {repeatMode === 'repeat-one' && <FaRedo color="#4edbacc7" style={{ transform: 'rotate(90deg)' }} />}
      </button>
    </div>
  );
};

export default TrackControls;