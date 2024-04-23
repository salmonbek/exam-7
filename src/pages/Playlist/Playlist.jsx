import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./index.module.scss";
import { BaseURL } from "../../utils/api";
import { useLocalStore } from "../../utils/store";
import TracksList from "../../components/tracksList/tracksList";

export default function Playlist() {
  const [playlist, setPlaylist] = useState();

  const { playlistID } = useParams();
  const {
    access_token,
    currentAudio,
    currentPlaylist,
    isPlaying,
    likedSongs,
    setIsPlaying,
    addLikedSong,
  } = useLocalStore();
  console.log(playlistID);

  useEffect(() => {
    fetch(BaseURL + `/me/tracks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d, "DDDDDDDDDDDDDDDDDDDDD");
      });

    fetch(BaseURL + `/playlists/${playlistID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setPlaylist(d);
      });
  }, [playlistID]);

  if (!playlist) {
    return "Loading....";
  }
  if(playlist.error) {
    return "Error happened"
  }

  console.log(playlist, "PLAYLIST");

  return (
    <div className={style.playlist}>
      <div className={style.playlist__info}>
        <div className={style.playlist__info__main}>
          <img
            src={playlist?.images[0]?.url}
            alt=""
            className={style.playlist__info__image}
          />
          <div className={style.playlist__info__text}>
            <h1>{playlist.name}</h1>
            <p></p>
            <p>
              Made for {} - {} songs, {}{" "}
            </p>
          </div>
        </div>
        <div className={style.playlist__info__panel}>
          <div className={style.playlist__info__panel__left}>
            <button
              className={style.playlist__info__panel__play}
              onClick={() => {
                if (!currentAudio.id) {
                  setIsPlaying(false);
                } else {
                  setIsPlaying(!isPlaying);
                }
              }}
            >
              {isPlaying ? (
                <i class="fa-solid fa-pause"></i>
              ) : (
                <i class="fa-solid fa-play"></i>
              )}
            </button>
            <button className={style.playlist__info__panel__like}>
              <i class="fa-regular fa-heart"></i>
            </button>
            <button className={style.playlist__info__panel__dots}>
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <div className={style.playlist__tracks}>
        <TracksList data={playlist?.tracks?.items} />
        {/* {playlist?.tracks?.items?.map((track) => (
          <div>
            <audio src={track.track.preview_url} controls />
          </div>
        ))} */}
      </div>
    </div>
  );
}
