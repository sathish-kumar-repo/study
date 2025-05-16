import React, { useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

interface AudioPlayerProps {
  src: string;
}

const formatTime = (secs: number): string => {
  let ss = Math.floor(secs),
    hh = Math.floor(ss / 3600),
    mm = Math.floor((ss - hh * 3600) / 60);
  ss = ss - hh * 3600 - mm * 60;

  if (hh > 0) {
    mm = mm < 10 ? Number("0" + mm) : mm; // This line can be improved but for formatTime works fine
  }
  const ssStr = ss < 10 ? "0" + ss : ss.toString();
  const mmStr = mm < 10 && hh > 0 ? "0" + mm : mm.toString();

  return hh > 0 ? `${hh}:${mmStr}:${ssStr}` : `${mm}:${ssStr}`;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(src));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    const onTimeUpdate = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
  }, [isSeeking]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const onSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const onSeekCommit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    audio.currentTime = Number(e.target.value);
    setIsSeeking(false);
  };

  const onSeekMouseDown = () => setIsSeeking(true);

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const vol = Number(e.target.value);
    audio.volume = vol;
    setVolume(vol);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio.volume === 0) {
      audio.volume = 1;
      setVolume(1);
    } else {
      audio.volume = 0;
      setVolume(0);
    }
  };

  const seekPercent = duration ? (currentTime / duration) * 100 : 0;
  const volumePercent = volume * 100;

  return (
    <div className={styles.aWrap} data-src={src}>
      <button
        className={styles.aPlay}
        onClick={togglePlay}
        disabled={!isLoaded}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <PauseIcon fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </button>

      <div className={styles.range}>
        <span className={styles.underRanger}></span>
        <input
          className={styles.aSeek}
          type="range"
          min={0}
          max={Math.floor(duration)}
          value={currentTime}
          step={1}
          disabled={!isLoaded}
          onChange={onSeekChange}
          onMouseDown={onSeekMouseDown}
          onTouchStart={onSeekMouseDown}
          onMouseUp={() => {
            const audio = audioRef.current;
            audio.currentTime = currentTime;
            setIsSeeking(false);
          }}
          onTouchEnd={() => {
            const audio = audioRef.current;
            audio.currentTime = currentTime;
            setIsSeeking(false);
          }}
        />
        <span
          className={styles.changeRange}
          style={{ width: `${seekPercent > 95 ? 95 : seekPercent}%` }}
        ></span>
      </div>

      <div className={styles.aCron}>
        <span className={styles.aNow}>{formatTime(currentTime)}</span> /{" "}
        <span className={styles.aTime}>{formatTime(duration)}</span>
      </div>

      <div className={styles.volumeContainer}>
        <span className={styles.aVolIco} onClick={toggleMute}>
          {volume === 0 ? (
            <VolumeOffIcon fontSize="medium" />
          ) : (
            <VolumeUpIcon fontSize="medium" />
          )}
        </span>

        <div className={styles.rangeVolume}>
          <span className={styles.underRanger}></span>
          <input
            className={styles.aVolume}
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={onVolumeChange}
            disabled={!isLoaded}
          />
          <span
            className={styles.changeRange}
            style={{ width: `${volumePercent > 95 ? 95 : volumePercent}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
