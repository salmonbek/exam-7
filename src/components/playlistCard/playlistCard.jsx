import style from "./index.module.scss";

export default function PlaylistCard({ name, image, description }) {
  return (
    <div className={style.playlist_card}>
      <img className={style.playlist_card__image} src={image} />
      <div className={style.playlist_card__text}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
