import React from "react";
import style from "./index.module.scss";
import PlaylistCard from "../../playlistCard/playlistCard";
import { Link } from "react-router-dom";

export default function Cards({ data }) {
  return (
    <div className={style.cards}>
      {data?.map((d) => (
        <Link to={`/playlists/${d.id}`}>
          <PlaylistCard
            description={d?.description}
            name={d?.name}
            image={d?.images[0].url}
          />
        </Link>
      ))}
    </div>
  );
}
