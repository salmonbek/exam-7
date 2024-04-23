import MiniPlaylistCard from "../../miniPlaylistCard/miniPlaylistCard";
import style from "./index.module.scss";

export default function GoodAfternoon({ playlists }) {
  if (!playlists) {
    return "Loading...";
  }
  return (
    <div className={style.goodAfternoon}>
      <h2>Good afternoon</h2>
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
