import style from "./index.module.scss";
import sound_waves_image from "../../assets/sound_waves.svg";
import { useLocalStore } from "../../utils/store";
import { AddSongToLikedSongs } from "../../utils/api";

export default function TracksList({ data }) {
  const {
    currentAudio,
    setCurrentAudio,
    access_token,
    likedSongs,
    addLikedSong,
    removeLikedSong,
  } = useLocalStore();

  function playAudio(audio) {
    setCurrentAudio({
      id: audio.id,
      name: audio.name,
      url: audio.url,
    });
  }

    console.log(likedSongs, "DDDDDDDDDDDDDDDDDDDDDDDDD");

  return (
    <div className={style.tracksList}>
      <table border={"1"} className={style.tracksList__table}>
        <tr className={style.tracksList__table__head}>
          <th className={style.tracksList__table__col1}>#</th>
          <th className={style.tracksList__table__col2}>Title</th>
          <th className={style.tracksList__table__col3}>Album</th>
          <th className={style.tracksList__table__col4}>
            <i class="fa-regular fa-clock"></i>
          </th>
        </tr>
        {data.length == 0 ? <h3 className={style.tracksList__noLikedSongs}>No Liked Songs</h3> : data.map((d, index) => (
          <tr
            key={d.id}
            className={style.tracksList__table__row}
            onClick={() =>
              playAudio({
                id: d.track.id,
                name: d.track.name,
                url: d.track.preview_url,
              })
            }
          >
            <td className={style.tracksList__table__col1}>
              {currentAudio.id == d.track.id ? (
                <img src={sound_waves_image} />
              ) : (
                index + 1
              )}
            </td>
            <td className={style.tracksList__table__col2}>
              <div className={style.tracksList__table__col__div}>
                <img
                  src={
                    d?.track?.album?.images[d?.track?.album?.images?.length - 1].url
                  }
                  alt=""
                />
                <div>
                  <h5>{d.track.name}</h5>
                  <p>{d?.track?.album?.artists[0]?.name}</p>
                </div>
              </div>
            </td>
            <td className={style.tracksList__table__col3}>
              {d?.track?.album?.name}
            </td>
            <td className={style.tracksList__table__col4}>
              {likedSongs.find((i) => i.track.id == d.track.id) ? (
                <button onClick={() => removeLikedSong(d.track)}>
                  <i class="fa-solid fa-heart"></i>
                </button>
              ) : (
                <button onClick={() => addLikedSong(d)}>
                  <i class="fa-regular fa-heart"></i>
                </button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
