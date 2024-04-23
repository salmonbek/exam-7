import MiniPlaylistCard from "../../miniPlaylistCard/miniPlaylistCard";
import style from "./index.module.scss";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

export default function GoodAfternoon({ playlists }) {
  if (!playlists) {
    return "Loading...";
  }
  return (
    <div className={style.goodAfternoon}>
      <div className="arrow">
        <CiCircleChevLeft />
        <CiCircleChevRight />
      </div>
      <h2>Good afternoon</h2>
      <style>
        {`
         .arrow *{
           width:45px;
           height:45px;
           cursor:pointer;
          }
        `}
      </style>
      <br />
      <div className={style.goodAfternoon_playlists}>
        {playlists.map((playlist) => (
          <MiniPlaylistCard
            id={playlist.id}
            image={playlist.images[0].url}
            name={playlist.name}
          ></MiniPlaylistCard>
        ))}
      </div>
    </div>
  );
}
