import React from "react";
import { useLocalStore } from "../../utils/store";
import TracksList from "../../components/tracksList/tracksList";

import style from "./index.module.scss"


export default function LikedSongs() {
  const { likedSongs } = useLocalStore();

  return (
    <div className={style.likedSongs}>
      <div className={style.titlePart}>
        <h1>Liked Songs</h1>
      </div>
      <div>
        <TracksList data={likedSongs} />

      </div>
    </div>
  );
}
