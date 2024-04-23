import React from "react";

import style from "./index.module.scss";
import { Link } from "react-router-dom";

export default function MiniPlaylistCard({ image, name, id }) {
  return (
    <Link to={`/playlists/${id}`}>
      <div className={style.miniPlaylistCard}>
        <div>
          <img src={image} alt="" />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
}
