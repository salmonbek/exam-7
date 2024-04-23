import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
import { useLocalStore } from "../../utils/store";

const Bottom = ({ audio }) => {
  const audioRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState();

  const { isPlaying, setIsPlaying, currentAudio } = useLocalStore();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);

      setInterval(() => {
        setTime(audioRef.current.currentTime);
      }, 100);
    }
  }, [audio]);

  // useEffect(() => {
  //   setIsPlaying(false);
  // }, [audio]);

  // useEffect(() => {
  //   setTime(audioRef?.current?.currentTime);
  // }, [audioRef?.current?.currentTime]);

  function PlayButton() {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef?.current?.pause();
    } else {
      setIsPlaying(false);
      audioRef?.current?.play();
    }
  }

  if (!audio) {
    return "";
  }

  return (
    <div className={style.bottom}>
      <div></div>
      <div className={style.bottomPlayer}>
        <button className={style.bottom__playButton} onClick={PlayButton}>
          {!isPlaying ? (
            <i class="fa-solid fa-pause"></i>
          ) : (
            <i class="fa-solid fa-play"></i>
          )}
        </button>
        <audio
          className={style.bottom__audio}
          ref={audioRef}
          src={audio.url}
          controls
        ></audio>
        <div className={style.bottom__audioProgress}>
          <input type="range" max={audioRef?.current?.duration} value={time} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Bottom;
